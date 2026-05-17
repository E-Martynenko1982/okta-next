import Link from "next/link";
import SocialLinks from "./SocialLinks";

const categories = [
  { name: "Головна", href: "/", icon: "🏠" },
  { name: "Новини", href: "/news", icon: "📰" },
  { name: "Каталог", href: "/catalog", icon: "📁" },
  { name: "Порівняти товари", href: "/compare", icon: "⚖️" },
  { name: "Умови співпраці", href: "/terms", icon: "🤝" },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-20 h-[calc(100vh-5rem)] w-64 shrink-0 pb-8 border-r border-white/10 hidden lg:flex flex-col bg-transparent overflow-y-auto py-8">
      <nav className="px-4 flex-1">
        <ul className="space-y-4">
          {categories.map((category) => (
            <li key={category.name}>
              <Link
                href={category.href}
                className="group flex items-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg overflow-hidden transition-all"
              >
                {/* Icon Section */}
                <div className="flex items-center justify-center w-12 h-12 text-xl">
                  {category.icon}
                </div>
                
                {/* Vertical Divider */}
                <div className="w-px h-8 bg-white/20" />
                
                {/* Text Section */}
                <div className="px-4 py-3 text-white/80 group-hover:text-white font-medium text-sm transition-colors">
                  {category.name}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="px-4 mt-auto">
        <SocialLinks />
      </div>
    </aside>
  );
}
