import type { Metadata } from "next";
import WatchBatteriesContent from "./WatchBatteriesContent";

export const metadata: Metadata = {
  title: "Акумулятори для годинників",
  description: "Каталог акумуляторів для годинників",
};

export default function WatchBatteriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <WatchBatteriesContent />
    </main>
  );
}
