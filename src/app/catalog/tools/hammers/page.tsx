import type { Metadata } from "next";
import WatchHammersContent from "./WatchHammersContent";

export const metadata: Metadata = {
  title: "Молоточки для майстра з ремонту годинників",
  description: "Каталог: Молоточки для майстра з ремонту годинників",
};

export default function WatchHammersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <WatchHammersContent />
    </main>
  );
}
