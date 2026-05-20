import type { Metadata } from "next";
import BrushesContent from "./BrushesContent";

export const metadata: Metadata = {
  title: "Щітки, пензлі та груші для ремонту годинників",
  description: "Каталог: Щітки, пензлі та груші для ремонту годинників",
};

export default function BrushesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <BrushesContent />
    </main>
  );
}
