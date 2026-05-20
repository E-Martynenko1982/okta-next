import type { Metadata } from "next";
import ZincAir312Content from "./ZincAir312Content";

export const metadata: Metadata = {
  title: "Zinc Air розмір 312",
  description: "Каталог: Zinc Air розмір 312",
};

export default function ZincAir312Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ZincAir312Content />
    </main>
  );
}
