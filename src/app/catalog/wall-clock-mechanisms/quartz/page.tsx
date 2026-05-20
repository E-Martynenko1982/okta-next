import type { Metadata } from "next";
import QuartzWallMechanismsContent from "./QuartzWallMechanismsContent";

export const metadata: Metadata = {
  title: "Кварцові механізми для настінних годинників",
  description: "Каталог: Кварцові механізми для настінних годинників",
};

export default function QuartzWallMechanismsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <QuartzWallMechanismsContent />
    </main>
  );
}
