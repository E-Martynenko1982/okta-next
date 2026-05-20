import type { Metadata } from "next";
import ZincAir10Content from "./ZincAir10Content";

export const metadata: Metadata = {
  title: "Zinc Air розмір 10",
  description: "Каталог: Zinc Air розмір 10",
};

export default function ZincAir10Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ZincAir10Content />
    </main>
  );
}
