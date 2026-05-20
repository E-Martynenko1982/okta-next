import type { Metadata } from "next";
import WallClockHandsContent from "./WallClockHandsContent";

export const metadata: Metadata = {
  title: "Стрілки для настінних годинників",
  description: "Каталог: Стрілки для настінних годинників",
};

export default function WallClockHandsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <WallClockHandsContent />
    </main>
  );
}
