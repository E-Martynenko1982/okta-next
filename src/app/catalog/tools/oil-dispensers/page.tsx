import type { Metadata } from "next";
import OilDispensersContent from "./OilDispensersContent";

export const metadata: Metadata = {
  title: "Маслянки і маслодозатори",
  description: "Каталог: Маслянки і маслодозатори",
};

export default function OilDispensersPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <OilDispensersContent />
    </main>
  );
}
