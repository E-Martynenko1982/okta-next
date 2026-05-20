import Link from "next/link";
export default function LithiumBatteriesItem() {
  return (
    <li>
      <Link
        href="/catalog/renata-industrial/lithium-3v"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Літієві батарейки, 3.0V
      </Link>
    </li>
  );
}
