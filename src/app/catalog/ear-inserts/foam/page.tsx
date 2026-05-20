import type { Metadata } from "next";
import FoamEarInsertsContent from "./FoamEarInsertsContent";

export const metadata: Metadata = {
  title: "Вкладиші пінопластові",
  description: "Каталог: Вкладиші пінопластові",
};

export default function FoamEarInsertsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <FoamEarInsertsContent />
    </main>
  );
}
