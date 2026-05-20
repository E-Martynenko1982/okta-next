import type { Metadata } from "next";
import WatchWashersContent from "./WatchWashersContent";

export const metadata: Metadata = {
  title: "Мийки годинників і механізмів",
  description: "Каталог: Мийки годинників і механізмів",
};

export default function WatchWashersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <WatchWashersContent />
    </main>
  );
}
