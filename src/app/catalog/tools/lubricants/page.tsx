import type { Metadata } from "next";
import LubricantsContent from "./LubricantsContent";

export const metadata: Metadata = {
  title: "Мастила та змазки",
  description: "Каталог: Мастила та змазки",
};

export default function LubricantsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <LubricantsContent />
    </main>
  );
}
