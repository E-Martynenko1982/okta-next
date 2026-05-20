import type { Metadata } from "next";
import TextileRios1931Content from "./TextileRios1931Content";

export const metadata: Metadata = {
  title: "Текстильні ремінці RIOS1931",
  description: "Каталог: Текстильні ремінці RIOS1931",
};

export default function TextileRios1931Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <TextileRios1931Content />
    </main>
  );
}
