import Link from "next/link";
export default function Heads() {
  return (
    <li>
      <Link
        href="/catalog/case-parts/heads"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Головки, кнопки, втулки
      </Link>
    </li>
  );
}