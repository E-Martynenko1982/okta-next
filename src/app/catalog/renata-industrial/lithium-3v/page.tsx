import type { Metadata } from "next";
import LithiumBatteriesContent from "./LithiumBatteriesContent";

export const metadata: Metadata = {
  title: "Літієві батарейки, 3.0V",
  description: "Каталог: Літієві батарейки, 3.0V",
};

export default function LithiumBatteriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <LithiumBatteriesContent />
    </main>
  );
}
