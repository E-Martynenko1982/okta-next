import type { Metadata } from "next";
import CuttingToolsContent from "./CuttingToolsContent";

export const metadata: Metadata = {
  title: "Різальний інструмент",
  description: "Каталог: Різальний інструмент",
};

export default function CuttingToolsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <CuttingToolsContent />
    </main>
  );
}
