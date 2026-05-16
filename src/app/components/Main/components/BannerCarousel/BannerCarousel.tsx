"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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

const COLS = 5; // Кількість механічних панелей (оптимально для преміального вигляду)
const ANIM_DURATION = 800; // Тривалість руху панелей (мс)
const STAGGER_MS = 60; // Затримка між панелями для ефекту "хвилі"
const TOTAL_ANIM = ANIM_DURATION + STAGGER_MS * (COLS - 1) + 50;
const AUTOPLAY_INTERVAL = 5000;

export default function BannerCarousel() {
  const [current, setCurrent] = useState(0);
  const [nextIdx, setNextIdx] = useState<number | null>(null);
  const [ready, setReady] = useState(false);
  const currentRef = useRef(current);
  const isAnimating = useRef(false);

  const goTo = useCallback((n: number) => {
    if (!ready || isAnimating.current || n === currentRef.current) return;
    isAnimating.current = true;
    setNextIdx(n);
    currentRef.current = n;

    setTimeout(() => {
      setCurrent(n);
      setNextIdx(null);
      isAnimating.current = false;
    }, TOTAL_ANIM);
  }, [ready]);

  const goPrev = useCallback(() => {
    goTo((currentRef.current - 1 + banners.length) % banners.length);
  }, [goTo]);

  const goNext = useCallback(() => {
    goTo((currentRef.current + 1) % banners.length);
  }, [goTo]);

  // Затримка старту на 1 секунду після рендеру
  useEffect(() => {
    const delay = setTimeout(() => setReady(true), 1000);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goNext, ready]);

  return (
    <section className="w-full">
      {/* Чисті CSS-анімації для плавного каліброваного зсуву панелей */}
      <style>{`
        @keyframes mechanicalSlideUp {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        @keyframes mechanicalSlideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }
        @keyframes imageParallaxUp {
          0% { transform: translateY(-20%) scale(1.05); filter: blur(4px); }
          100% { transform: translateY(0) scale(1); filter: blur(0px); }
        }
        @keyframes imageParallaxDown {
          0% { transform: translateY(20%) scale(1.05); filter: blur(4px); }
          100% { transform: translateY(0) scale(1); filter: blur(0px); }
        }
      `}</style>

      <div className="relative w-full overflow-hidden rounded-xl shadow-2xl aspect-925/454 bg-neutral-950 group">
        
        {/* Базовий банер (поточний) */}
        <div className="absolute inset-0">
          <Image
            src={banners[current]}
            alt={`Банер ${current + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 925px"
            className="object-cover transition-transform duration-700 ease-out"
            priority
          />
          {/* Легке преміальне затемнення для глибини */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
        </div>

        {/* Шар механічних панелей, що перекриває сцену під час транзиції */}
        {nextIdx !== null && (
          <div className="absolute inset-0 z-10 flex pointer-events-none">
            {Array.from({ length: COLS }).map((_, i) => {
              const isEven = i % 2 === 0;
              const delay = `${i * STAGGER_MS}ms`;
              const widthPercent = 100 / COLS;

              return (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    width: `${widthPercent}%`,
                    height: "100%",
                    overflow: "hidden",
                    // Суміжні панелі рухаються назустріч одна одній (вгору і вниз)
                    animation: `${isEven ? "mechanicalSlideUp" : "mechanicalSlideDown"} ${ANIM_DURATION}ms ${delay} cubic-bezier(0.16, 1, 0.3, 1) both`,
                    // Тонка делікатна лінія між панелями, що підкреслює механіку розрізу
                    boxShadow: "0 0 15px rgba(0,0,0,0.5)",
                    borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  }}
                >
                  {/* Внутрішній контейнер зворотно-пропорційно розтягується і зсувається, 
                      щоб картинка склеювалася в єдине ціле без спотворень */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: `-${i * 100}%`,
                      width: `${COLS * 100}%`,
                      height: "100%",
                      // Паралакс-ефект: картинка рухається всередині панелі протилежно до руху самої панелі
                      animation: `${isEven ? "imageParallaxUp" : "imageParallaxDown"} ${ANIM_DURATION}ms ${delay} cubic-bezier(0.16, 1, 0.3, 1) both`,
                    }}
                  >
                    <Image
                      src={banners[nextIdx]}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Елементи керування: Стрілка вліво */}
        <button
          onClick={goPrev}
          aria-label="Попередній банер"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-neutral-900/60 hover:bg-neutral-900/95 text-white/80 hover:text-white border border-white/10 shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Елементи керування: Стрілка вправо */}
        <button
          onClick={goNext}
          aria-label="Наступний банер"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-neutral-900/60 hover:bg-neutral-900/95 text-white/80 hover:text-white border border-white/10 shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-x-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Індикатори (Крапки) — мінімалістичні інженерні риски */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 bg-neutral-950/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Перейти до банера ${index + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === current ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}