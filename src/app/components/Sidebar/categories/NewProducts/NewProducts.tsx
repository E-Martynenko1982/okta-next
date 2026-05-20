import WatchSparePartsItem from "./items/WatchSparePartsItem";
import WatchMechanismsItem from "./items/WatchMechanismsItem";
import ETAItem from "./items/ETAItem";
import SeikoItem from "./items/SeikoItem";
import MiyotaItem from "./items/MiyotaItem";
import MechanismPartsItem from "./items/MechanismPartsItem";
import ToolsEquipmentItem from "./items/ToolsEquipmentItem";
import PressesSpecialToolsItem from "./items/PressesSpecialToolsItem";
import HorotecItem from "./items/HorotecItem";
import WallClockKeysItem from "./items/WallClockKeysItem";
import AnchorItem from "./items/AnchorItem";
import WorkPlaceItem from "./items/WorkPlaceItem";
import HandToolsItem from "./items/HandToolsItem";
import StorageBoxesItem from "./items/StorageBoxesItem";
import ScrewdriversItem from "./items/ScrewdriversItem";
import WatchWashersItem from "./items/WatchWashersItem";
import BraceletToolsItem from "./items/BraceletToolsItem";
import LoupesItem from "./items/LoupesItem";
import ColletsItem from "./items/ColletsItem";
import CuttingToolsItem from "./items/CuttingToolsItem";
import KeysOpenersItem from "./items/KeysOpenersItem";
import MechanismHoldersItem from "./items/MechanismHoldersItem";
import TweezersItem from "./items/TweezersItem";
import OilDispensersItem from "./items/OilDispensersItem";
import WatchDiagnosticsItem from "./items/WatchDiagnosticsItem";
import ConsumablesItem from "./items/ConsumablesItem";

export default function NewProducts() {
  return (
    <details className="group">
      <summary className="flex items-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg overflow-hidden transition-all cursor-pointer list-none">
        <div className="px-4 py-3 text-white/80 group-hover:text-white font-medium text-sm transition-colors flex-1">
          Нові товарні позиції
        </div>
        <div className="pr-3 text-white/40 text-xs group-open:rotate-90 transition-transform">▶</div>
      </summary>

      <ul className="mt-1 ml-4 border-l border-white/10 pl-3 max-h-64 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] space-y-0.5">
        <WatchSparePartsItem />
        <WatchMechanismsItem />
        <ETAItem />
        <SeikoItem />
        <MiyotaItem />
        <MechanismPartsItem />
        <ToolsEquipmentItem />
        <PressesSpecialToolsItem />
        <HorotecItem />
        <WallClockKeysItem />
        <AnchorItem />
        <WorkPlaceItem />
        <HandToolsItem />
        <StorageBoxesItem />
        <ScrewdriversItem />
        <WatchWashersItem />
        <BraceletToolsItem />
        <LoupesItem />
        <ColletsItem />
        <CuttingToolsItem />
        <KeysOpenersItem />
        <MechanismHoldersItem />
        <TweezersItem />
        <OilDispensersItem />
        <WatchDiagnosticsItem />
        <ConsumablesItem />
      </ul>
    </details>
  );
}
