import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Про нас',
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Про нас</h1>
    </main>
  );
}
