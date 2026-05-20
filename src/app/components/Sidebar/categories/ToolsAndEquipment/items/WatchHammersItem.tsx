import Link from "next/link";
export default function WatchHammersItem() {
  return (
    <li>
      <Link
        href="/catalog/tools/hammers"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Молоточки для майстра з ремонту годинників
      </Link>
    </li>
  );
}
