import type { Metadata } from "next";
import WatchModulesContent from "./WatchModulesContent";

export const metadata: Metadata = {
  title: "Годинникові модулі",
  description: "Каталог годинникових модулів",
};

export default function WatchModulesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <WatchModulesContent />
    </main>
  );
}
