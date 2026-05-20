import type { Metadata } from "next";
import MechanicalBuiltInContent from "./MechanicalBuiltInContent";

export const metadata: Metadata = {
  title: "Механічні вбудовані механізми",
  description: "Каталог: Механічні вбудовані механізми",
};

export default function MechanicalBuiltInPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <MechanicalBuiltInContent />
    </main>
  );
}
