'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { StrapModelWithColors, StrapModelColor } from '@/lib/db/straps';

const IMG = {
  categories:  'https://okta.ua/images/strapes/categories',
  model_color: 'https://okta.ua/images/strapes/model_color',
  slides:      'https://okta.ua/images/strapes/slides',
};

function imgUrl(base: string, filename: string | null | undefined): string | null {
  if (!filename) return null;
  if (filename.startsWith('http')) return filename;
  return `${base}/${filename.replace(/^\//, '')}`;
}

export default function StrapCard({ model }: { model: StrapModelWithColors }) {
  const [selected, setSelected] = useState<StrapModelColor | null>(
    model.colors[0] ?? null
  );

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col hover:border-white/20 transition-all group">
      {/* Main image */}
      <div className="relative aspect-square bg-white/5 overflow-hidden">
        {imgUrl(IMG.model_color, selected?.big_image) ? (
          <Image
            src={imgUrl(IMG.model_color, selected!.big_image)!}
            alt={`${model.name} — ${selected!.name}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-white/20 text-5xl">⌚</div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1">
        {/* Name */}
        <h3 className="text-white font-semibold text-base leading-tight">{model.name}</h3>

        {/* Description */}
        {model.first_description && (
          <p className="text-white/55 text-sm leading-relaxed line-clamp-3">
            {model.first_description}
          </p>
        )}

        {/* Color swatches */}
        {model.colors.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {model.colors.map((color) => (
              <button
                key={color.id}
                onClick={() => setSelected(color)}
                title={color.name}
                className={`relative w-8 h-8 rounded-full border-2 overflow-hidden transition-all ${
                  selected?.id === color.id
                    ? 'border-white scale-110 shadow-[0_0_6px_rgba(255,255,255,0.4)]'
                    : 'border-white/20 hover:border-white/60'
                }`}
              >
                {imgUrl(IMG.model_color, color.small_image) ? (
                  <Image
                    src={imgUrl(IMG.model_color, color.small_image)!}
                    alt={color.name}
                    fill
                    className="object-cover"
                    sizes="32px"
                  />
                ) : (
                  <span className="block w-full h-full bg-white/10" />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Selected color name */}
        {selected?.name && (
          <p className="text-white/40 text-xs">{selected.name}</p>
        )}

        {/* CTA */}
        <div className="mt-auto pt-2">
          <button className="w-full py-2 px-4 bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/15 hover:border-white/30 rounded-lg text-white text-sm font-medium transition-all">
            {selected?.button || 'Детальніше'}
          </button>
        </div>
      </div>
    </div>
  );
}
