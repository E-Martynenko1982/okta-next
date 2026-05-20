import type { Metadata } from "next";
import MechanismPartsContent from "./MechanismPartsContent";

export const metadata: Metadata = {
  title: "Деталі механізмів",
  description: "Каталог деталей механізмів",
};

export default function MechanismPartsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <MechanismPartsContent />
    </main>
  );
}
