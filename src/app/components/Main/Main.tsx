import BannerCarousel from "./components/BannerCarousel/BannerCarousel";
import CategoryBanners from "./components/CategoryBanners/CategoryBanners";
import NewsBlock from "./components/NewsBlock/NewsBlock";
import MatrixBackground from "./components/Matrix/Matrixbackground";

export default function MainSection() {
  return (
    <div style={{ position: "relative" }}>
      <MatrixBackground />

      <main
        className="flex flex-col gap-10 w-full px-4 py-3"
        style={{ position: "relative", zIndex: 1 }}
      >
        <BannerCarousel />
        <CategoryBanners />
        <NewsBlock />
      </main>
    </div>
  );
}