import type { Metadata } from "next";
import ClockKeysContent from "./ClockKeysContent";

export const metadata: Metadata = {
  title: "Ключі для настінних годинників",
  description: "Каталог: Ключі для настінних годинників",
};

export default function ClockKeysPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <ClockKeysContent />
    </main>
  );
}
