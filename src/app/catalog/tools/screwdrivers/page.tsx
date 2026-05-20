import type { Metadata } from "next";
import ScrewdriversContent from "./ScrewdriversContent";

export const metadata: Metadata = {
  title: "Викрутки",
  description: "Каталог: Викрутки",
};

export default function ScrewdriversPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ScrewdriversContent />
    </main>
  );
}
