import Link from "next/link";
export default function PendulumsItem() {
  return (
    <li>
      <Link
        href="/catalog/wall-clock-mechanisms/pendulums"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Маятники та підвіски
      </Link>
    </li>
  );
}
