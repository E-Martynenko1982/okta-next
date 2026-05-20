import Link from "next/link";
export default function PendulumPartsItem() {
  return (
    <li>
      <Link
        href="/catalog/wall-clock-keys/pendulum-parts"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Деталі маятників та підвіски
      </Link>
    </li>
  );
}
