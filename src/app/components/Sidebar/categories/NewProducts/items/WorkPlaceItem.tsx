import Link from "next/link";
export default function WorkPlaceItem() {
  return (
    <li>
      <Link
        href="/catalog/workplace"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Робоче місце майстра
      </Link>
    </li>
  );
}
