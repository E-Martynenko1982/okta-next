import Link from "next/link";
export default function BrushesItem() {
  return (
    <li>
      <Link
        href="/catalog/tools/brushes"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Щітки, пензлі та груші для ремонту годинників
      </Link>
    </li>
  );
}
