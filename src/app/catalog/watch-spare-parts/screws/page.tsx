import type { Metadata } from "next";
import ScrewsContent from "./ScrewsContent";

export const metadata: Metadata = {
  title: "Гвинти",
  description: "Каталог гвинтів для годинників",
};

export default function ScrewsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ScrewsContent />
    </main>
  );
}
