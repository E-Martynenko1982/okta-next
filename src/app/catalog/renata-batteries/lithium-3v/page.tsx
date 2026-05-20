import type { Metadata } from "next";
import LithiumContent from "./LithiumContent";

export const metadata: Metadata = {
  title: "Літієві батарейки 3V",
  description: "Каталог: Літієві батарейки 3V",
};

export default function LithiumPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <LithiumContent />
    </main>
  );
}
