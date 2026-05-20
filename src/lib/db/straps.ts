import type { RowDataPacket } from 'mysql2';
import { getDb } from './index';

export type StrapCategory = {
  id: number;
  name: string;
  image: string;
  type: number;
  sub_list: string; // JSON array of model IDs, e.g. "[1,2,3]"
};

export type StrapModel = {
  id: number;
  name: string;
  first_description: string;
  second_description: string;
};

export type StrapModelColor = {
  id: number;
  name: string;
  big_image: string;
  small_image: string;
  button: string;
  id_model: number;
};

export type StrapModelWithColors = StrapModel & {
  colors: StrapModelColor[];
};

export type StrapCategoryWithModels = StrapCategory & {
  models: StrapModelWithColors[];
};

function parseSubList(sub_list: string): number[] {
  try {
    const parsed = JSON.parse(sub_list);
    if (Array.isArray(parsed)) return parsed.map(Number);
  } catch {}
  return sub_list
    .split(',')
    .map((s) => parseInt(s.trim(), 10))
    .filter((n) => !isNaN(n));
}

export async function getAllModelsWithColors(): Promise<StrapModelWithColors[]> {
  const db = getDb();

  const [models] = await db.query<(StrapModel & RowDataPacket)[]>(
    'SELECT id, name, first_description, second_description FROM straps_models ORDER BY name'
  );

  const [colors] = await db.query<(StrapModelColor & RowDataPacket)[]>(
    'SELECT id, name, big_image, small_image, button, id_model FROM straps_model_colors'
  );

  return models.map((m) => ({
    ...m,
    colors: colors.filter((c) => c.id_model === m.id),
  }));
}

export async function getStrapsTree(): Promise<StrapCategoryWithModels[]> {
  const db = getDb();

  const [categories] = await db.query<(StrapCategory & RowDataPacket)[]>(
    'SELECT id, name, image, type, sub_list FROM straps_categories ORDER BY name'
  );

  const allModels = await getAllModelsWithColors();
  const modelsById = new Map(allModels.map((m) => [m.id, m]));

  return categories.map((cat) => ({
    ...cat,
    models: parseSubList(cat.sub_list)
      .map((id) => modelsById.get(id))
      .filter((m): m is StrapModelWithColors => m !== undefined),
  }));
}
