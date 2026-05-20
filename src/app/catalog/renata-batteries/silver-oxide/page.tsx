import type { Metadata } from "next";
import SilverOxideContent from "./SilverOxideContent";

export const metadata: Metadata = {
  title: "Срібно-оксидні батарейки",
  description: "Каталог: Срібно-оксидні батарейки",
};

export default function SilverOxidePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <SilverOxideContent />
    </main>
  );
}
