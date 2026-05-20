import type { Metadata } from "next";
import WatchStandsContent from "./WatchStandsContent";

export const metadata: Metadata = {
  title: "Підставки для годинників",
  description: "Каталог: Підставки для годинників",
};

export default function WatchStandsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <WatchStandsContent />
    </main>
  );
}
