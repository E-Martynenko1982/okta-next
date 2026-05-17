"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

const banners = [
  "/images/x1771928667m_okta-ua-baner-925-454-brand-2026.webp.pagespeed.ic.FmkqYqp2hi.webp",
  "/images/x1772037360m_okta-ua-baner-925-454-brand-anchor-2026-1.webp.pagespeed.ic.QoM6MO99pg.webp",
  "/images/x1772201143m_okta-ua-baner-925-454-brand-seiko-2026-1.webp.pagespeed.ic.jHGkR_66VB.webp",
  "/images/x1776342035m_okta-ua-baner-horotec-925-454-2026-10.webp.pagespeed.ic.6SvyHHAUvO.webp",
  "/images/x1776342110m_okta-ua-baner-horotec-925-454-2026-6.webp.pagespeed.ic.Jv91mcysXK.webp",
  "/images/x1776342350m_okta-ua-baner-horotec-925-454-2026-5-2.webp.pagespeed.ic.UfzVJ4NXg1.webp",
  "/images/x1776342361m_okta-ua-baner-horotec-925-454-2026-12.webp.pagespeed.ic.xaXoDYINbJ.webp",
];

const AUTOPLAY_INTERVAL = 5000;

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const [radius, setRadius] = useState(350); // Динамічний радіус циліндра
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = banners.length;
  // Крок кута для кожного слайда на колі (360 градусів / кількість слайдів)
  const theta = 360 / totalSlides;

  // Точний адаптивний розрахунок радіуса барабана при зміні розмірів екрана
  useEffect(() => {
    if (!containerRef.current) return;

    const updateRadius = () => {
      if (containerRef.current) {
        const height = containerRef.current.clientHeight;
        // Математична формула радіуса правильного багатогранника: 
        // r = (висота_грані / 2) / tan(кута_кроку / 2)
        const computedRadius = (height / 2) / Math.tan((theta * Math.PI) / 360);
        // Додаємо мікро-зазор (+2px), щоб уникнути лінійних просвітів між стиками граней
        setRadius(computedRadius + 2);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, [theta]);

  const goNext = useCallback(() => {
    setCurrent((prev) => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => prev - 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goNext]);

  // Загальний кут повороту валу (барабана). Значення позитивне для прокрутки «вперед/вгору»
  const carouselRotation = current * theta;

  return (
    <section className="w-full">
      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-xl bg-neutral-950 group aspect-925/454"
        style={{ perspective: "1500px" }} // Створює фокусну глибину для 3D-простору
      >
        
        {/* Тіло 3D-Барабана (Обертання навколо осі X) */}
        <div
          className="relative w-full h-full transition-transform duration-1000"
          style={{
            transformStyle: "preserve-3d",
            // Відсуваємо барабан назад на довжину радіуса і крутимо по осі X
            transform: `translateZ(-${radius}px) rotateX(${carouselRotation}deg)`,
          }}
        >
          {banners.map((src, index) => {
            // Кожна наступна сторінка зміщується на свій крок кута
            const slideRotation = -index * theta;

            return (
              <div
                key={index}
                className="absolute inset-0 w-full h-full"
                style={{
                  backfaceVisibility: "hidden", // Приховуємо картинки, що опинилися ззаду валу
                  // Повертаємо грань на її кут і виштовхуємо з центру на радіус вперед
                  transform: `rotateX(${slideRotation}deg) translateZ(${radius}px)`,
                }}
              >
                <Image
                  src={src}
                  alt={`Обладнання годинникаря — Слайд ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 925px"
                  className="object-cover select-none"
                  priority={index === 0}
                />
                
                {/* Градієнтне затінення верхнього та нижнього країв барабана. 
                    Воно створює преміальний об'єм та ефект того, що картинка йде в тінь корпусу */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 pointer-events-none opacity-90 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Бічні інженерні тіні корпусу для фокусування на центрі */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />

        {/* Навігація: Стрілка вгору/вліво */}
        <button
          onClick={goPrev}
          aria-label="Попередній інструмент"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-neutral-900/60 hover:bg-neutral-900 border border-white/10 text-white shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Навігація: Стрілка вниз/вправо */}
        <button
          onClick={goNext}
          aria-label="Наступний інструмент"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-neutral-900/60 hover:bg-neutral-900 border border-white/10 text-white shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Хронометричні індикатори (Крапки під барабаном) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 bg-neutral-950/50 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
          {banners.map((_, index) => {
            const normalizedCurrent = ((current % totalSlides) + totalSlides) % totalSlides;
            return (
              <button
                key={index}
                onClick={() => {
                  const diff = index - normalizedCurrent;
                  setCurrent((prev) => prev + diff);
                }}
                aria-label={`Калібрування банера ${index + 1}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === normalizedCurrent ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}