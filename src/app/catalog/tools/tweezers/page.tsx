import type { Metadata } from "next";
import TweezersContent from "./TweezersContent";

export const metadata: Metadata = {
  title: "Пінцети",
  description: "Каталог: Пінцети",
};

export default function TweezersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <TweezersContent />
    </main>
  );
}
