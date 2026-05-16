export default function Search() {
  return (
    <div className="relative">
      <input 
        type="text" 
        placeholder="Пошук..." 
        className="bg-white/10 border border-white/20 rounded-full py-1 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/50"
      />
    </div>
  );
}
