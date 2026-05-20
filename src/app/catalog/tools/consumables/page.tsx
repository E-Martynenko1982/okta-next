import type { Metadata } from "next";
import ConsumablesContent from "./ConsumablesContent";

export const metadata: Metadata = {
  title: "Витратні матеріали",
  description: "Каталог: Витратні матеріали",
};

export default function ConsumablesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ConsumablesContent />
    </main>
  );
}
