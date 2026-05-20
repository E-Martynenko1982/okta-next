import WatchMechanismsItem from "./items/WatchMechanismsItem";
import MechanismPartsItem from "./items/MechanismPartsItem";
import WatchBatteriesItem from "./items/WatchBatteriesItem";
import WatchModulesItem from "./items/WatchModulesItem";
import ScrewsItem from "./items/ScrewsItem";
import WatchHandsItem from "./items/WatchHandsItem";
import WatchGlassItem from "./items/WatchGlassItem";

export default function WatchSpareParts() {
  return (
    <details className="group">
      <summary className="flex items-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg overflow-hidden transition-all cursor-pointer list-none">
        <div className="px-4 py-3 text-white/80 group-hover:text-white font-medium text-sm transition-colors flex-1">
          Запчастини для годинників
        </div>
        <div className="pr-3 text-white/40 text-xs group-open:rotate-90 transition-transform">▶</div>
      </summary>
      <ul className="mt-1 ml-4 border-l border-white/10 pl-3 space-y-0.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <WatchMechanismsItem />
        <MechanismPartsItem />
        <WatchBatteriesItem />
        <WatchModulesItem />
        <ScrewsItem />
        <WatchHandsItem />
        <WatchGlassItem />
      </ul>
    </details>
  );
}
