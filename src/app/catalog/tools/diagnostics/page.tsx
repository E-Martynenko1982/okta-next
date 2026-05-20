import type { Metadata } from "next";
import WatchDiagnosticsContent from "./WatchDiagnosticsContent";

export const metadata: Metadata = {
  title: "Діагностика годинників",
  description: "Каталог: Діагностика годинників",
};

export default function WatchDiagnosticsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <WatchDiagnosticsContent />
    </main>
  );
}
