import type { Metadata } from "next";
import LoupesContent from "./LoupesContent";

export const metadata: Metadata = {
  title: "Лупи",
  description: "Каталог: Лупи",
};

export default function LoupesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <LoupesContent />
    </main>
  );
}
