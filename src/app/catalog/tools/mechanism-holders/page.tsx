import type { Metadata } from "next";
import MechanismHoldersContent from "./MechanismHoldersContent";

export const metadata: Metadata = {
  title: "Тримачі механізмів",
  description: "Каталог: Тримачі механізмів",
};

export default function MechanismHoldersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <MechanismHoldersContent />
    </main>
  );
}
