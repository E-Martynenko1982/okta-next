import type { Metadata } from "next";
import SiliconEarInsertsContent from "./SiliconEarInsertsContent";

export const metadata: Metadata = {
  title: "Вкладиші силіконові",
  description: "Каталог: Вкладиші силіконові",
};

export default function SiliconEarInsertsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <SiliconEarInsertsContent />
    </main>
  );
}
