/**
 * Human heart animations for React.
 * Pure SVG + CSS: no Lottie, no downloads, no dependencies.
 *
 * Usage:
 *   import Demo, { AnatomicalHeart, PulseHeart, EcgLine } from "./HeartAnimations";
 *
 *   <AnatomicalHeart size={300} bpm={72} />
 *   <PulseHeart size={160} color="#e11d48" />
 *   <EcgLine width={360} bpm={72} />
 *
 * `bpm` sets the beat speed for every component.
 */

const css = `
.hrt { --hrt-dur: .83s; display: inline-block; line-height: 0; }
.hrt svg { overflow: visible; }

.hrt-beat, .hrt-soft, .hrt-glow, .hrt-ring { transform-box: fill-box; }
.hrt-beat { transform-origin: 50% 60%; animation: hrt-beat var(--hrt-dur) ease-in-out infinite; }
.hrt-soft { transform-origin: 50% 100%; animation: hrt-soft var(--hrt-dur) ease-in-out infinite; }
.hrt-glow { transform-origin: 50% 50%; animation: hrt-glow var(--hrt-dur) ease-in-out infinite; }
.hrt-ring { transform-origin: 50% 50%; opacity: 0; animation: hrt-ring var(--hrt-dur) ease-out infinite; }
.hrt-flow { stroke-dasharray: 2 10; animation: hrt-flow var(--hrt-dur) linear infinite; }
.hrt-ecg  { stroke-dasharray: 28 200; animation: hrt-ecg var(--hrt-dur) linear infinite; }

/* "lub-dub": two quick contractions, then rest */
@keyframes hrt-beat {
  0%   { transform: scale(1); }
  14%  { transform: scale(1.09); }
  28%  { transform: scale(1); }
  42%  { transform: scale(1.06); }
  70%, 100% { transform: scale(1); }
}
@keyframes hrt-soft {
  0%   { transform: scale(1); }
  14%  { transform: scale(1.03); }
  28%  { transform: scale(1); }
  42%  { transform: scale(1.02); }
  70%, 100% { transform: scale(1); }
}
@keyframes hrt-glow {
  0%   { opacity: .30; transform: scale(.95); }
  14%  { opacity: .75; transform: scale(1.08); }
  28%  { opacity: .40; transform: scale(1); }
  42%  { opacity: .60; transform: scale(1.05); }
  70%, 100% { opacity: .30; transform: scale(.95); }
}
@keyframes hrt-ring {
  0%   { opacity: .55; transform: scale(.7); }
  100% { opacity: 0;   transform: scale(1.7); }
}
@keyframes hrt-flow { to { stroke-dashoffset: -24; } }
@keyframes hrt-ecg  { from { stroke-dashoffset: 28; } to { stroke-dashoffset: -100; } }

@media (prefers-reduced-motion: reduce) {
  .hrt-beat, .hrt-soft, .hrt-glow, .hrt-ring, .hrt-flow, .hrt-ecg { animation: none; }
  .hrt-ring { opacity: 0; }
  .hrt-ecg { stroke-dasharray: none; }
}
`;

const HeartStyles = () => <style>{css}</style>;
const durVar = (bpm) => ({ "--hrt-dur": `${60 / Math.max(bpm, 1)}s` });

/* ------------------------------------------------------------------ */
/* 1. Anatomical heart: chambers, aorta, vena cava, coronary vessels   */
/* ------------------------------------------------------------------ */

// Vessel centre-lines (also reused for the moving "blood flow" dashes)
const AORTA = "M128 92 C122 46 140 18 168 28 C192 38 190 70 184 100";
const PULM = "M142 98 C140 66 166 58 200 70";
const VENA = "M90 6 C86 34 84 62 88 94";

export function AnatomicalHeart({ size = 280, bpm = 72, className = "", style }) {
    return (
        <span className={`hrt ${className}`} style={{ ...durVar(bpm), ...style }}>
      <HeartStyles />
      <svg
          viewBox="0 0 240 260"
          width={size}
          height={(size * 260) / 240}
          role="img"
          aria-label="Beating human heart"
      >
        <defs>
          <radialGradient id="hrt-body" cx="36%" cy="30%" r="85%">
            <stop offset="0" stopColor="#f0707a" />
            <stop offset=".5" stopColor="#c92f42" />
            <stop offset="1" stopColor="#6e0f22" />
          </radialGradient>
          <linearGradient id="hrt-artery" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e2505c" />
            <stop offset="1" stopColor="#8f1a2e" />
          </linearGradient>
          <linearGradient id="hrt-vein" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7d9be0" />
            <stop offset="1" stopColor="#32478f" />
          </linearGradient>
          <radialGradient id="hrt-glow-grad">
            <stop offset="0" stopColor="#ff4d63" stopOpacity=".55" />
            <stop offset="1" stopColor="#ff4d63" stopOpacity="0" />
          </radialGradient>
        </defs>

          {/* soft glow behind the organ */}
          <circle className="hrt-glow" cx="125" cy="150" r="115" fill="url(#hrt-glow-grad)" />

          {/* great vessels (sit behind the heart body) */}
          <g className="hrt-soft" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* superior vena cava (blue, blood returns to the heart) */}
              <path d={VENA} stroke="url(#hrt-vein)" strokeWidth="15" />
          <path className="hrt-flow" d={VENA} stroke="#fff" strokeOpacity=".45" strokeWidth="2.5" />

              {/* aorta + arch branches (red, blood leaves the heart) */}
              <path d={AORTA} stroke="url(#hrt-artery)" strokeWidth="20" />
          <path d="M145 26 L142 6" stroke="url(#hrt-artery)" strokeWidth="8" />
          <path d="M158 25 L162 5" stroke="url(#hrt-artery)" strokeWidth="8" />
          <path d="M170 30 L182 12" stroke="url(#hrt-artery)" strokeWidth="8" />
          <path className="hrt-flow" d={AORTA} stroke="#fff" strokeOpacity=".45" strokeWidth="2.5" />

              {/* pulmonary artery (blue) */}
              <path d={PULM} stroke="url(#hrt-vein)" strokeWidth="16" />
          <path d="M200 70 L216 58" stroke="url(#hrt-vein)" strokeWidth="9" />
          <path d="M200 70 L214 86" stroke="url(#hrt-vein)" strokeWidth="9" />
          <path className="hrt-flow" d={PULM} stroke="#fff" strokeOpacity=".45" strokeWidth="2.5" />
        </g>

          {/* heart body */}
          <g className="hrt-beat">
          <path
              d="M112 84 C84 66 44 84 46 130 C48 178 100 214 142 244 C176 214 210 176 204 128 C200 90 160 62 112 84 Z"
              fill="url(#hrt-body)"
          />
              {/* right atrium + left auricle shading */}
              <path
                  d="M60 100 C50 120 54 150 72 168 C86 150 92 120 88 94 C78 88 66 90 60 100 Z"
                  fill="#a31f34"
                  opacity=".55"
              />
          <path
              d="M150 80 C172 70 196 90 198 118 C184 112 166 104 150 80 Z"
              fill="#9a1a31"
              opacity=".6"
          />
              {/* interventricular groove */}
              <path
                  d="M100 100 C108 150 120 200 142 242"
                  fill="none"
                  stroke="#5e0b1c"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity=".55"
              />
              {/* coronary arteries (red) and veins (blue) */}
              <g fill="none" strokeLinecap="round">
            <path d="M128 94 C110 100 80 110 66 140 C60 156 64 172 76 184" stroke="#ff8a8f" strokeWidth="3" />
            <path d="M156 94 C150 140 140 190 142 236" stroke="#ff8a8f" strokeWidth="3" />
            <path d="M176 102 C190 130 184 170 160 206" stroke="#8aa6ea" strokeWidth="2.5" />
            <path d="M94 110 C90 150 104 190 124 220" stroke="#8aa6ea" strokeWidth="2.5" />
          </g>
              {/* specular highlights */}
              <ellipse cx="80" cy="122" rx="12" ry="28" transform="rotate(-18 80 122)" fill="#fff" opacity=".16" />
          <ellipse cx="160" cy="110" rx="9" ry="16" transform="rotate(25 160 110)" fill="#fff" opacity=".10" />
        </g>
      </svg>
    </span>
    );
}

/* ------------------------------------------------------------------ */
/* 2. Simple heart with expanding pulse rings                          */
/* ------------------------------------------------------------------ */

const HEART_ICON =
    "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

export function PulseHeart({ size = 160, bpm = 72, color = "#e11d48", rings = true, className = "", style }) {
    return (
        <span className={`hrt ${className}`} style={{ ...durVar(bpm), ...style }}>
      <HeartStyles />
      <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Beating heart">
        {rings && (
            <>
                <circle className="hrt-ring" cx="50" cy="52" r="30" fill="none" stroke={color} strokeWidth="1.5" />
                <circle
                    className="hrt-ring"
                    cx="50"
                    cy="52"
                    r="30"
                    fill="none"
                    stroke={color}
                    strokeWidth="1.5"
                    style={{ animationDelay: "calc(var(--hrt-dur) * 0.28)" }}
                />
            </>
        )}
          <g transform="translate(14 15) scale(3)">
          <g className="hrt-beat">
            <path d={HEART_ICON} fill={color} />
            <path d="M6 7.5c0-1.4 1-2.5 2.4-2.5" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth=".8" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </span>
    );
}

/* ------------------------------------------------------------------ */
/* 3. ECG heartbeat line                                               */
/* ------------------------------------------------------------------ */

const ECG_PATH =
    "M0 42 H52 C56 42 58 36 62 36 C66 36 68 42 72 42 H88 L94 48 L102 6 L110 70 L116 42 H138 C146 42 148 30 158 30 C168 30 170 42 178 42 H300";

export function EcgLine({ width = 360, bpm = 72, color = "#ff5a6a", className = "", style }) {
    return (
        <span className={`hrt ${className}`} style={{ ...durVar(bpm), ...style }}>
      <HeartStyles />
      <svg viewBox="0 0 300 80" width={width} height={(width * 80) / 300} role="img" aria-label="Heartbeat ECG line">
        {/* faint full trace */}
          <path d={ECG_PATH} pathLength="100" fill="none" stroke={color} strokeOpacity=".18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* bright sweep */}
          <path
              className="hrt-ecg"
              d={ECG_PATH}
              pathLength="100"
              fill="none"
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ filter: `drop-shadow(0 0 4px ${color})` }}
          />
      </svg>
    </span>
    );
}

/* ------------------------------------------------------------------ */
/* Demo: all three together                                            */
/* ------------------------------------------------------------------ */

export default function HeartShowcase() {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "2.5rem",
                padding: "3rem 1.5rem",
                background: "#14090d",
                minHeight: "100vh",
            }}
        >
            <AnatomicalHeart size={300} bpm={72} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
                <PulseHeart size={150} bpm={72} />
                <EcgLine width={320} bpm={72} />
            </div>
        </div>
    );
}
