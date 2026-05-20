import type { Metadata } from "next";
import SharpeningStoneContent from "./SharpeningStoneContent";

export const metadata: Metadata = {
  title: "Камені точильні, приладдя для заточки",
  description: "Каталог: Камені точильні, приладдя для заточки",
};

export default function SharpeningStonePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <SharpeningStoneContent />
    </main>
  );
}
