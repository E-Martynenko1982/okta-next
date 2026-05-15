import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Каталог',
  description: 'Каталог товарів інтернет-магазину Okta',
};

export default function CatalogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Каталог</h1>
      <p className="text-gray-500">Завантаження каталогу...</p>
    </main>
  );
}
