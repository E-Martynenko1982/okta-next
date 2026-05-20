import Link from "next/link";
export default function PressesSpecialToolsItem() {
  return (
    <li>
      <Link
        href="/catalog/presses"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Преси, насадки та спеціальні інструменти
      </Link>
    </li>
  );
}
