import type { Metadata } from "next";
import LithiumBatteriesWithContactsContent from "./LithiumBatteriesWithContactsContent";

export const metadata: Metadata = {
  title: "Літієві батарейки, 3.0V з контактами",
  description: "Каталог: Літієві батарейки, 3.0V з контактами",
};

export default function LithiumBatteriesWithContactsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <LithiumBatteriesWithContactsContent />
    </main>
  );
}
