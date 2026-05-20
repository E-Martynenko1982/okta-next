import type { Metadata } from "next";
import PressesSpecialToolsContent from "./PressesSpecialToolsContent";

export const metadata: Metadata = {
  title: "Преси, насадки та спеціальні інструменти",
  description: "Каталог: Преси, насадки та спеціальні інструменти",
};

export default function PressesSpecialToolsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PressesSpecialToolsContent />
    </main>
  );
}
