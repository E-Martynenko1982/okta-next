import type { Metadata } from "next";
import PendulumPartsContent from "./PendulumPartsContent";

export const metadata: Metadata = {
  title: "Деталі маятників та підвіски",
  description: "Каталог: Деталі маятників та підвіски",
};

export default function PendulumPartsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PendulumPartsContent />
    </main>
  );
}
