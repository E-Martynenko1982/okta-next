import type { Metadata } from "next";
import LeatherRios1931Content from "./LeatherRios1931Content";

export const metadata: Metadata = {
  title: "Шкіряні ремінці RIOS1931",
  description: "Каталог: Шкіряні ремінці RIOS1931",
};

export default function LeatherRios1931Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <LeatherRios1931Content />
    </main>
  );
}
