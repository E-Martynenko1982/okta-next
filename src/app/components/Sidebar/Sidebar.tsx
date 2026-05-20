import Link from "next/link";
import SocialLinks from "./SocialLinks";
 import MatrixBackground from "../Main/components/Matrix/Matrixbackground";
 import { NewProducts, 
  ToolsAndEquipment, 
  RenataBatteries,  
  RenataHearingBatteries, 
  RenataIndustrialBatteries, 
  WatchSpareParts, 
  StorageBoxes, 
  CaseParts, 
  WallClockMechanisms, 
  BuiltInMechanisms, 
  EarInserts, 
  WallClockKeys, 
  Rios1931Straps
 } from "./categories";

const navLinks = [
  { name: "Головна", href: "/", icon: "🏠" },
  { name: "Новини", href: "/news", icon: "📰" },
  { name: "Порівняти товари", href: "/compare", icon: "⚖️" },
  { name: "Умови співпраці", href: "/terms", icon: "🤝" },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-20 h-[calc(100vh-5rem)] w-64 shrink-0 pb-8 border-r border-white/10 hidden lg:flex flex-col bg-transparent overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-8">
      <MatrixBackground />
      <nav className="relative z-10 px-4 flex-1">
        <ul className="space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="group flex items-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg overflow-hidden transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 text-xl">
                  {link.icon}
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="px-4 py-3 text-white/80 group-hover:text-white font-medium text-sm transition-colors">
                  {link.name}
                </div>
              </Link>
            </li>
          ))}

          <li>
            <NewProducts />
          </li>
          <li>
            <ToolsAndEquipment />
          </li>
          <li>
            <RenataBatteries />
          </li>
          <li>
            <RenataHearingBatteries />
          </li>
          <li>
            <RenataIndustrialBatteries />
          </li>
          <li>
            <WatchSpareParts />
          </li>
          <li>
            <StorageBoxes />
          </li>
          <li>
            <CaseParts />
          </li>
          <li>
            <WallClockMechanisms />
          </li>
          <li>
            <BuiltInMechanisms />
          </li>
          <li>
            <EarInserts />
          </li>
          <li>
            <WallClockKeys />
          </li>
          <li>
            <Rios1931Straps />
          </li>
        </ul>
      </nav>
      <div className="relative z-10 px-4 mt-auto">
        <SocialLinks />
      </div>
    </aside>
  );
}
