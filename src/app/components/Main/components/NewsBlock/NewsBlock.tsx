export default function NewsBlock() {
  const news = [
    { id: 1, date: "12.05.2026", title: "Нова колекція Seiko 2026" },
    { id: 2, date: "05.05.2026", title: "Оновлення інструментів Horotec" },
    { id: 3, date: "28.04.2026", title: "Акція на бренд Anchor — знижки до 20%" },
  ];

  return (
    <section className="w-full">
      <h2 className="text-xl font-semibold text-white mb-4">Новини</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {news.map((item) => (
          <div
            key={item.id}
            className="rounded-xl bg-white/10 border border-white/20 p-5 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <p className="text-white/50 text-xs mb-2">{item.date}</p>
            <p className="text-white font-medium text-sm">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
