import type { Metadata } from "next";
import KeysOpenersContent from "./KeysOpenersContent";

export const metadata: Metadata = {
  title: "Ключі та відкривачі",
  description: "Каталог: Ключі та відкривачі",
};

export default function KeysOpenersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <KeysOpenersContent />
    </main>
  );
}
