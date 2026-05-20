import type { Metadata } from "next";
import ColletsContent from "./ColletsContent";

export const metadata: Metadata = {
  title: "Цанги",
  description: "Каталог: Цанги",
};

export default function ColletsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ColletsContent />
    </main>
  );
}
