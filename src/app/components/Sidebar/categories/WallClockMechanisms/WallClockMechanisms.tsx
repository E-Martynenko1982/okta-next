import QuartzWallMechanismsItem from "./items/QuartzWallMechanismsItem";
import PendulumsItem from "./items/PendulumsItem";
import WallClockHandsItem from "./items/WallClockHandsItem";

export default function WallClockMechanisms() {
  return (
    <details className="group">
      <summary className="flex items-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg overflow-hidden transition-all cursor-pointer list-none">
        <div className="px-4 py-3 text-white/80 group-hover:text-white font-medium text-sm transition-colors flex-1">
          Механізми та комплектуючі для настінних годинників
        </div>
        <div className="pr-3 text-white/40 text-xs group-open:rotate-90 transition-transform">▶</div>
      </summary>
      <ul className="mt-1 ml-4 border-l border-white/10 pl-3 space-y-0.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <QuartzWallMechanismsItem />
        <PendulumsItem />
        <WallClockHandsItem />
      </ul>
    </details>
  );
}
