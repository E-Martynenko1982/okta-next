import type { Metadata } from "next";
import QuartzBuiltInContent from "./QuartzBuiltInContent";

export const metadata: Metadata = {
  title: "Кварцові вбудовані механізми",
  description: "Каталог: Кварцові вбудовані механізми",
};

export default function QuartzBuiltInPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <QuartzBuiltInContent />
    </main>
  );
}
