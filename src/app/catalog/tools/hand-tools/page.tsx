import type { Metadata } from "next";
import HandToolsContent from "./HandToolsContent";

export const metadata: Metadata = {
  title: "Інструмент для роботи зі стрілками",
  description: "Каталог: Інструмент для роботи зі стрілками",
};

export default function HandToolsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <HandToolsContent />
    </main>
  );
}
