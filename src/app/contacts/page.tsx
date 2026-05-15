import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакти',
};

export default function ContactsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Контакти</h1>
    </main>
  );
}
