import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кошик',
};

export default function CartPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Кошик</h1>
      <p className="text-gray-500">Кошик порожній</p>
    </main>
  );
}
