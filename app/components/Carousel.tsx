"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

interface CarouselProps {
  images: string[];
  height?: number;
}

export default function Carousel({ images, height = 420 }: CarouselProps) {
  const n = images.length;
  const [offset, setOffset] = useState(0);
  const [sliding, setSliding] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const idx = (d: number) => ((offset + d) % n + n) % n;

  const advance = useCallback(() => {
    if (sliding) return;
    setSliding(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setOffset(o => (o + 1) % n);
      setSliding(false);
    }, 560);
  }, [sliding, n]);

  const retreat = useCallback(() => {
    if (sliding) return;
    setSliding(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setOffset(o => (o - 1 + n) % n);
      setSliding(false);
    }, 560);
  }, [sliding, n]);

  useEffect(() => {
    const t = setInterval(advance, 4500);
    return () => clearInterval(t);
  }, [advance]);

  /*
   * Strip has 4 equal slots, each = 25% of strip = 33.33% of container.
   * Strip width = 400% of container / 3... actually easier:
   *   container = 100%, each slot = 1/3 of container
   *   strip = 4 slots = 4/3 × 100% of container = 133.33%
   *
   * At rest:   strip translateX = -25% of strip (= -33.33% of container)
   *            → slot0 off-left, slot1=LEFT, slot2=CENTER, slot3=RIGHT
   * Sliding:   strip translateX = -50% of strip (= -66.66% of container)
   *            → slot2=LEFT, slot3=CENTER, slot4(=slot0 new)=RIGHT enters
   * After snap: offset advances, instant reset to -25%, no transition
   *
   * Slots rendered as [d=-1, d=0, d=1, d=2] relative to current offset.
   */

  return (
    <div style={{ width: "100%", background: "var(--cream)", paddingTop: 28, paddingBottom: 28 }}>
      <div style={{ position: "relative", overflow: "hidden" }}>

        {/* Strip */}
        <div
          style={{
            display: "flex",
            width: "133.33%",
            height,
            alignItems: "center",
            gap: 6,
            transform: sliding ? "translateX(-50%)" : "translateX(-25%)",
            transition: sliding
              ? "transform 0.56s cubic-bezier(0.65,0,0.35,1)"
              : "none",
          }}
        >
          {([-1, 0, 1, 2] as const).map((d, slotPos) => {
            /* slot2 is always the visual center */
            const isCenter = slotPos === 2;
            return (
              <div
                key={slotPos}
                style={{
                  width: "25%",           /* 25% of strip = 33.33% of container */
                  flexShrink: 0,
                  height: isCenter ? height + 48 : height - 16,
                  position: "relative",
                  overflow: "hidden",
                  transition: "height 0.56s ease, box-shadow 0.56s ease",
                  boxShadow: isCenter
                    ? "0 14px 44px rgba(44,37,26,0.22)"
                    : "0 3px 12px rgba(44,37,26,0.08)",
                  zIndex: isCenter ? 2 : 1,
                }}
              >
                <Image
                  src={images[idx(d)]}
                  alt=""
                  fill
                  sizes="34vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        {(["prev", "next"] as const).map(dir => (
          <button
            key={dir}
            onClick={dir === "next" ? advance : retreat}
            aria-label={dir === "next" ? "Siguiente" : "Anterior"}
            style={{
              position: "absolute",
              [dir === "next" ? "right" : "left"]: 14,
              top: "50%", transform: "translateY(-50%)",
              zIndex: 10,
              background: "rgba(44,37,26,0.22)",
              border: "1px solid rgba(255,255,255,0.4)",
              backdropFilter: "blur(4px)",
              color: "#fff",
              width: 36, height: 36,
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(44,37,26,0.45)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(44,37,26,0.22)")}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              {dir === "next"
                ? <path d="M3 1L7.5 5L3 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                : <path d="M7 1L2.5 5L7 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              }
            </svg>
          </button>
        ))}
      </div>

      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, paddingTop: "1.1rem" }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { if (!sliding) setOffset(i); }}
            aria-label={`Imagen ${i + 1}`}
            style={{
              width: i === offset ? 22 : 6, height: 6, borderRadius: 3,
              padding: 0, border: "none", cursor: "pointer",
              background: i === offset ? "var(--teal)" : "rgba(30,80,96,0.25)",
              transition: "width 0.35s ease, background 0.35s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
