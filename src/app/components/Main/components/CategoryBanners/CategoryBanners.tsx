export default function CategoryBanners() {
  const categories = [
    { label: "Годинники", emoji: "⌚" },
    { label: "Інструменти", emoji: "🔧" },
    { label: "Матеріали", emoji: "🧲" },
    { label: "Запчастини", emoji: "⚙️" },
    { label: "Обладнання", emoji: "🔬" },
    { label: "Аксесуари", emoji: "💎" },
  ];

  return (
    <section className="w-full">
      <h2 className="text-xl font-semibold text-white mb-4">Категорії</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="flex flex-col items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 p-6 cursor-pointer transition-colors"
          >
            <span className="text-4xl">{cat.emoji}</span>
            <span className="text-white text-sm font-medium">{cat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
