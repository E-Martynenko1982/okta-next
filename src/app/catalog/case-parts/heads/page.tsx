import type { Metadata } from "next";
import HeadsContent from "./HeadsContent";

export const metadata: Metadata = {
  title: "Головки, кнопки, втулки",
  description: "Каталог: Головки, кнопки, втулки",
};

export default function HeadsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
     <HeadsContent />
    </main>
  );
}