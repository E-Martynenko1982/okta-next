import type { Metadata } from "next";
import ZincAir13Content from "./ZincAir13Content";

export const metadata: Metadata = {
  title: "Zinc Air розмір 13",
  description: "Каталог: Zinc Air розмір 13",
};

export default function ZincAir13Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ZincAir13Content />
    </main>
  );
}
