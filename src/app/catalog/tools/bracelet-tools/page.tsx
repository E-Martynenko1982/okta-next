import type { Metadata } from "next";
import BraceletToolsContent from "./BraceletToolsContent";

export const metadata: Metadata = {
  title: "Інструмент для роботи з браслетами",
  description: "Каталог: Інструмент для роботи з браслетами",
};

export default function BraceletToolsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <BraceletToolsContent />
    </main>
  );
}
