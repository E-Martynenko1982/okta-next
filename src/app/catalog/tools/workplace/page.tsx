import type { Metadata } from "next";
import WorkPlaceContent from "./WorkPlaceContent";

export const metadata: Metadata = {
  title: "Робоче місце майстра",
  description: "Каталог: Робоче місце майстра",
};

export default function WorkPlacePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <WorkPlaceContent />
    </main>
  );
}
