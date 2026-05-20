import type { Metadata } from 'next';
import { getAllModelsWithColors } from '@/lib/db/straps';
import StrapCard from '../../components/StrapCard/StrapCard';

export const metadata: Metadata = {
  title: 'Ремінці',
  description: 'Каталог ремінців для годинників',
};

export default async function StrapsPage() {
  let models: Awaited<ReturnType<typeof getAllModelsWithColors>> = [];
  let dbError: string | null = null;

  try {
    models = await getAllModelsWithColors();
  } catch (err) {
    dbError = err instanceof Error ? err.message : 'Помилка з\'єднання з БД';
  }

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold text-white mb-2">Ремінці</h1>

      {dbError ? (
        <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm space-y-1">
          <p className="font-semibold">Не вдалося підключитися до бази даних</p>
          <p className="text-red-400/70 font-mono text-xs">{dbError}</p>
          <p className="text-white/40 text-xs pt-1">Перевірте змінні DB_HOST, DB_USER, DB_PASSWORD, DB_NAME у файлі <code>.env.local</code></p>
        </div>
      ) : models.length === 0 ? (
        <p className="text-white/50 mt-4">Товарів не знайдено</p>
      ) : (
        <>
          <p className="text-white/40 text-sm mb-8">{models.length} моделей</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {models.map((model) => (
              <StrapCard key={model.id} model={model} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
