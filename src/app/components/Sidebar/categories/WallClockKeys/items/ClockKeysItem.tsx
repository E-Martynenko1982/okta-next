import Link from "next/link";
export default function ClockKeysItem() {
  return (
    <li>
      <Link
        href="/catalog/wall-clock-keys/keys"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Ключі для настінних годинників
      </Link>
    </li>
  );
}
