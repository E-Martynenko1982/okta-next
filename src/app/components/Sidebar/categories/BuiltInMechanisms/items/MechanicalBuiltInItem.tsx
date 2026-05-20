import Link from "next/link";
export default function MechanicalBuiltInItem() {
  return (
    <li>
      <Link
        href="/catalog/built-in-mechanisms/mechanical"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Механічні вбудовані механізми
      </Link>
    </li>
  );
}
