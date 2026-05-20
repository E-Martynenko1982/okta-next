import Link from "next/link";
export default function FoamEarInsertsItem() {
  return (
    <li>
      <Link
        href="/catalog/ear-inserts/foam"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Вкладиші пінопластові
      </Link>
    </li>
  );
}
