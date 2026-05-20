import Link from "next/link";
export default function LithiumItem() {
  return (
    <li>
      <Link
        href="/catalog/renata-batteries/lithium-3v"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Літієві батарейки 3V
      </Link>
    </li>
  );
}
