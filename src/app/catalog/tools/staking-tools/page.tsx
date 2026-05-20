import type { Metadata } from "next";
import StakingToolsContent from "./StakingToolsContent";

export const metadata: Metadata = {
  title: "Колізвари",
  description: "Каталог: Колізвари",
};

export default function StakingToolsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <StakingToolsContent />
    </main>
  );
}
