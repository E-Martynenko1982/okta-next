import type { Metadata } from "next";
import PartsBoxesContent from "./PartsBoxesContent";

export const metadata: Metadata = {
  title: "Коробки для деталей",
  description: "Каталог: Коробки для деталей",
};

export default function PartsBoxesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PartsBoxesContent />
    </main>
  );
}
