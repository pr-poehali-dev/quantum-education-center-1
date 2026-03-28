import { useEffect, useRef } from "react";
import { FORMULAS } from "./webinar.utils";

function StarsCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    const stars: { x: number; y: number; r: number; a: number; speed: number; phase: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
      stars.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 7000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.3 + 0.2,
          a: Math.random(),
          speed: Math.random() * 0.008 + 0.002,
          phase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        const alpha = s.a * (0.35 + 0.65 * Math.sin(t * 0.001 * s.speed * 100 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,245,210,${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas
      ref={ref}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}
    />
  );
}

export default function WebinarBackground() {
  const formulaItems = FORMULAS.map((f, i) => ({
    text: f,
    left: `${(i * 6.5) % 94}%`,
    top: `${(i * 7.1) % 94}%`,
    size: 10 + (i % 5) * 2,
    opacity: 0.03 + (i % 4) * 0.01,
    rotate: (i % 7) * 6 - 18,
  }));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&family=Golos+Text:wght@400;500;600&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseGlow {
          0%,100% { box-shadow: 0 0 20px rgba(201,162,39,0.12); }
          50% { box-shadow: 0 0 44px rgba(201,162,39,0.32); }
        }
        .wu-fade { animation: fadeUp 0.7s ease both; }
        .wu-d1 { animation-delay: 0.1s; }
        .wu-d2 { animation-delay: 0.22s; }
        .wu-d3 { animation-delay: 0.38s; }
        .wu-d4 { animation-delay: 0.52s; }
        .wu-card { animation: pulseGlow 3s ease-in-out infinite; }
        .wu-btn-gold:hover { filter: brightness(1.12); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(201,162,39,0.35); }
        .wu-btn-vk:hover { filter: brightness(1.12); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(39,135,245,0.35); }
        .wu-btn-outline:hover { background: rgba(201,162,39,0.12); border-color: #c9a227; transform: translateY(-2px); }
        .wu-whom-card:hover { border-color: rgba(201,162,39,0.4) !important; transform: translateY(-4px); }
        .wu-topic:hover { background: rgba(201,162,39,0.05) !important; border-color: rgba(201,162,39,0.3) !important; }
        * { box-sizing: border-box; }
      `}</style>

      <StarsCanvas />

      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        {formulaItems.map((f, i) => (
          <span key={i} style={{
            position: "absolute", fontFamily: "serif", fontStyle: "italic",
            color: "#c9a227", whiteSpace: "nowrap", fontSize: f.size,
            left: f.left, top: f.top, opacity: f.opacity,
            transform: `rotate(${f.rotate}deg)`,
          }}>{f.text}</span>
        ))}
      </div>
    </>
  );
}
