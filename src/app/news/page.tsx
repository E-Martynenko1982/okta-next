import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Новини',
};

export default function NewsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Новини</h1>
      <p className="text-gray-500">Завантаження новин...</p>
    </main>
  );
}
