import type { Metadata } from "next";
import SealsContent from "./SealsContent";

export const metadata: Metadata = {
  title: "Ущільнювачі та прокладки для годинників",
  description: "Каталог: Ущільнювачі та прокладки для годинників",
};

export default function SealsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <SealsContent />
    </main>
  );
}
