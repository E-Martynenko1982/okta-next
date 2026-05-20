import Link from "next/link";
export default function HorotecItem() {
  return (
    <li>
      <Link
        href="/catalog/horotec"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        HOROTEC
      </Link>
    </li>
  );
}
