import type { Metadata } from "next";
import MechanismBoxesContent from "./MechanismBoxesContent";

export const metadata: Metadata = {
  title: "Бокси для механізмів",
  description: "Каталог: Бокси для механізмів",
};

export default function MechanismBoxesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <MechanismBoxesContent />
    </main>
  );
}
