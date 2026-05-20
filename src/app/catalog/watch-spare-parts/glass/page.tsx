import type { Metadata } from "next";
import WatchGlassContent from "./WatchGlassContent";

export const metadata: Metadata = {
  title: "Скло",
  description: "Каталог скла для годинників",
};

export default function WatchGlassPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <WatchGlassContent />
    </main>
  );
}
