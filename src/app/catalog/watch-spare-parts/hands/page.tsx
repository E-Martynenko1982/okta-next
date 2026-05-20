import type { Metadata } from "next";
import WatchHandsContent from "./WatchHandsContent";

export const metadata: Metadata = {
  title: "Стрілки для наручних годинників",
  description: "Каталог стрілок для наручних годинників",
};

export default function WatchHandsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <WatchHandsContent />
    </main>
  );
}
