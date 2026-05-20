import Link from "next/link";
export default function SiliconEarInsertsItem() {
  return (
    <li>
      <Link
        href="/catalog/ear-inserts/silicone"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Вкладиші силіконові
      </Link>
    </li>
  );
}
