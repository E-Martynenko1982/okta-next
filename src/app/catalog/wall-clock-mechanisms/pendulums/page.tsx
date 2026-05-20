import type { Metadata } from "next";
import PendulumsContent from "./PendulumsContent";

export const metadata: Metadata = {
  title: "Маятники та підвіски",
  description: "Каталог: Маятники та підвіски",
};

export default function PendulumsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <PendulumsContent />
    </main>
  );
}
