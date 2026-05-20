import type { Metadata } from "next";
import WatchMechanismsContent from "./WatchMechanismsContent";

export const metadata: Metadata = {
  title: "Годинникові механізми",
  description: "Каталог годинникових механізмів",
};

export default function WatchMechanismsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <WatchMechanismsContent />
    </main>
  );
}
