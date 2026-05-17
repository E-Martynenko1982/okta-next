"use client";

import { useState, useEffect, useCallback, useRef, useMemo, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const banners = [
  "/images/x1771928667m_okta-ua-baner-925-454-brand-2026.webp.pagespeed.ic.FmkqYqp2hi.webp",
  "/images/x1772037360m_okta-ua-baner-925-454-brand-anchor-2026-1.webp.pagespeed.ic.QoM6MO99pg.webp",
  "/images/x1772201143m_okta-ua-baner-925-454-brand-seiko-2026-1.webp.pagespeed.ic.jHGkR_66VB.webp",
  "/images/x1776342035m_okta-ua-baner-horotec-925-454-2026-10.webp.pagespeed.ic.6SvyHHAUvO.webp",
  "/images/x1776342110m_okta-ua-baner-horotec-925-454-2026-6.webp.pagespeed.ic.Jv91mcysXK.webp",
  "/images/x1776342350m_okta-ua-baner-horotec-925-454-2026-5-2.webp.pagespeed.ic.UfzVJ4NXg1.webp",
  "/images/x1776342361m_okta-ua-baner-horotec-925-454-2026-12.webp.pagespeed.ic.xaXoDYINbJ.webp",
];

const AUTOPLAY_INTERVAL = 6000;
const PARTICLE_WIDTH    = 740; 
const PARTICLE_HEIGHT   = 360; 
const PARTICLE_COUNT    = PARTICLE_WIDTH * PARTICLE_HEIGHT;


const VertexShader = `
  uniform float uProgress;
  uniform float uSize;
  attribute vec3 aRandom;
  attribute vec2 aUv;
  varying vec2 vUv;

  void main() {
    vUv = aUv;

    // Синусоїдальна хвиля вибуху (0 -> 1 -> 0)
    float wave = sin(uProgress * 3.14159265);

    vec3 displacedPosition = position;
    
    // Динамічний розліт часток у 3D просторі
    displacedPosition.x += aRandom.x * wave * 3.5;
    displacedPosition.y += aRandom.y * wave * 2.0;
    displacedPosition.z += aRandom.z * wave * 3.0;

    vec4 mvPosition = modelViewMatrix * vec4(displacedPosition, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Розмір точки трохи збільшений, щоб перекрити мікро-зазори між сусідніми пікселями
    gl_PointSize = uSize * (300.0 / -mvPosition.z);
  }
`;

const FragmentShader = `
  uniform sampler2D uTexCurrent;
  uniform sampler2D uTexNext;
  uniform float uProgress;
  varying vec2 vUv;

  void main() {
    // ІДЕАЛЬНА ЧІТКІСТЬ: Семплюємо безпосередньо глобальну координату vUv.
    // Це прибирає будь-яку дискретність (квадратичність) всередині самої точки.
    vec4 colorCurrent = texture2D(uTexCurrent, vUv);
    vec4 colorNext = texture2D(uTexNext, vUv);

    // Змішуємо кольори банерів відповідно до прогресу анімації
    vec4 finalColor = mix(colorCurrent, colorNext, uProgress);

    // Ігноруємо порожні пікселі
    if (finalColor.a < 0.1) discard;

    gl_FragColor = finalColor;
  }
`;

const PRECOMPUTED_RAND = (() => {
  const rand = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    rand[i * 3]     = (Math.random() - 0.5) * 2.0;
    rand[i * 3 + 1] = (Math.random() - 0.5) * 2.0;
    rand[i * 3 + 2] = (Math.random() - 0.5) * 2.0;
  }
  return rand;
})();

function Particles({
  currentIdx,
  prevIdx,
  setAnimating,
}: {
  currentIdx: number;
  prevIdx: number;
  setAnimating: (v: boolean) => void;
}) {
  const textures = useTexture(banners);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    textures.forEach((texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      texture.needsUpdate = true;
    });
  }, [textures]);

  const [geo, uniforms] = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const rand = new Float32Array(PARTICLE_COUNT * 3);
    const uvs = new Float32Array(PARTICLE_COUNT * 2);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const u = (i % PARTICLE_WIDTH) / (PARTICLE_WIDTH - 1);
      const v = Math.floor(i / PARTICLE_WIDTH) / (PARTICLE_HEIGHT - 1);

      // Координати вершин у 3D сцені (відповідно до пропорцій банера)
      pos[i * 3]     = (u - 0.5) * 10.15; // Легке коригування ширини
      pos[i * 3 + 1] = (0.5 - v) * 5.0;
      pos[i * 3 + 2] = 0;

      rand[i * 3]     = PRECOMPUTED_RAND[i * 3];
      rand[i * 3 + 1] = PRECOMPUTED_RAND[i * 3 + 1];
      rand[i * 3 + 2] = PRECOMPUTED_RAND[i * 3 + 2];

      // Правильна орієнтація UV-координат
      uvs[i * 2]     = u;
      uvs[i * 2 + 1] = 1.0 - v; 
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geometry.setAttribute("aRandom", new THREE.BufferAttribute(rand, 3));
    geometry.setAttribute("aUv", new THREE.BufferAttribute(uvs, 2));

    const uniformsData = {
      uTexCurrent: { value: textures[0] },
      uTexNext: { value: textures[0] },
      uProgress: { value: 0.0 },
      // Розмір точок оптимізовано під високу щільність
      uSize: { value: 0.022 }, 
    };

    return [geometry, uniformsData];
  }, [textures]);

  // Тригер старту анімації
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTexCurrent.value = textures[prevIdx];
      materialRef.current.uniforms.uTexNext.value = textures[currentIdx];
      materialRef.current.uniforms.uProgress.value = 0.0;
      progressRef.current = 0.0;
      setAnimating(true);
    }
  }, [currentIdx, prevIdx, textures, setAnimating]);

  // Анімаційний цикл R3F
  useFrame((_, delta) => {
    if (!materialRef.current || progressRef.current >= 1.0) return;

    progressRef.current = Math.min(1.0, progressRef.current + delta * 1.3);
    materialRef.current.uniforms.uProgress.value = progressRef.current;

    if (progressRef.current >= 1.0) {
      setAnimating(false);
    }
  });

  return (
    <points geometry={geo}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={VertexShader}
        fragmentShader={FragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
      />
    </points>
  );
}

// ─── ГОЛОВНИЙ КОМПОНЕНТ ──────────────────────────────────────────────────────
export default function ParticleCarousel() {
  const [indices, setIndices] = useState({ current: 0, prev: 0 });
  const [isAnimating, setAnimating] = useState(false);

  const switchSlide = useCallback((nextIdx: number) => {
    if (isAnimating || nextIdx === indices.current) return;
    setIndices((prev) => ({
      prev: prev.current,
      current: nextIdx,
    }));
  }, [isAnimating, indices.current]);

  const goNext = useCallback(() => {
    const next = (indices.current + 1) % banners.length;
    switchSlide(next);
  }, [indices.current, switchSlide]);

  const goPrev = useCallback(() => {
    const prev = (indices.current - 1 + banners.length) % banners.length;
    switchSlide(prev);
  }, [indices.current, switchSlide]);

  useEffect(() => {
    const t = setInterval(goNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(t);
  }, [goNext]);

  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden rounded-xl bg-transparent group aspect-[925/454] shadow-2xl">
        
        {/* dpr={[1, 2.5]} підтримує надчіткі дисплеї аж до коефіцієнта 2.5х */}
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2.5]}>
          <Suspense fallback={null}>
            <Particles 
              currentIdx={indices.current} 
              prevIdx={indices.prev} 
              setAnimating={setAnimating} 
            />
          </Suspense>
        </Canvas>

        {/* Навігація Ліворуч */}
        <button
          onClick={goPrev}
          aria-label="Попередній банер"
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900/60 hover:bg-neutral-900/90 border border-white/10 text-white shadow-2xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Навігація Праворуч */}
        <button
          onClick={goNext}
          aria-label="Наступний банер"
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-14 h-14 rounded-full bg-neutral-900/60 hover:bg-neutral-900/90 border border-white/10 text-white shadow-2xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Буліти */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 bg-neutral-950/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/5">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => switchSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === indices.current ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}