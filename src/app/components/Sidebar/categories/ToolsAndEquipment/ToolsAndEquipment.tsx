import {ScrewdriversItem,
  LoupesItem,
  ColletsItem,
  StakingToolsItem,
  CuttingToolsItem,
  WatchHammersItem,
  KeysOpenersItem,
  HandToolsItem,
  BrushesItem,
  PressesSpecialToolsItem,
  MechanismHoldersItem,
  BraceletToolsItem,
  TweezersItem,
  OilDispensersItem,
  SharpeningStoneItem,
  LubricantsItem,
  WatchDiagnosticsItem,
  WorkPlaceItem,
  ConsumablesItem,
  WatchWashersItem
} from "./items"

export default function ToolsAndEquipment() {
  return (
    <details className="group">
      <summary className="flex items-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg overflow-hidden transition-all cursor-pointer list-none">
        <div className="px-4 py-3 text-white/80 group-hover:text-white font-medium text-sm transition-colors flex-1">
          Інструменти та обладнання
        </div>
        <div className="pr-3 text-white/40 text-xs group-open:rotate-90 transition-transform">▶</div>
      </summary>

      <ul className="mt-1 ml-4 border-l border-white/10 pl-3 max-h-64 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] space-y-0.5">
        <ScrewdriversItem />
        <LoupesItem />
        <ColletsItem />
        <StakingToolsItem />
        <CuttingToolsItem />
        <WatchHammersItem />
        <KeysOpenersItem />
        <HandToolsItem />
        <BrushesItem />
        <PressesSpecialToolsItem />
        <MechanismHoldersItem />
        <BraceletToolsItem />
        <TweezersItem />
        <OilDispensersItem />
        <SharpeningStoneItem />
        <LubricantsItem />
        <WatchDiagnosticsItem />
        <WorkPlaceItem />
        <ConsumablesItem />
        <WatchWashersItem />
      </ul>
    </details>
  );
}
