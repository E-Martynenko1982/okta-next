import Link from "next/link";
export default function WatchModulesItem() {
  return (
    <li>
      <Link
        href="/catalog/watch-spare-parts/modules"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Годинникові модулі
      </Link>
    </li>
  );
}
