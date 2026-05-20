import Link from "next/link";
export default function QuartzBuiltInItem() {
  return (
    <li>
      <Link
        href="/catalog/built-in-mechanisms/quartz"
        className="block text-white/60 hover:text-white text-xs py-1.5 px-2 rounded hover:bg-white/5 transition-colors"
      >
        Кварцові вбудовані механізми
      </Link>
    </li>
  );
}
