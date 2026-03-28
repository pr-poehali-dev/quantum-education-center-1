import { useEffect, useRef, useState } from "react";

const SPEAKER_PHOTO = "https://cdn.poehali.dev/projects/766995cb-632a-44cf-867a-0b2115ca787d/bucket/c4457521-41f9-405f-adc0-ba28a5609ce1.png";

const FORMULAS = [
  "E = mc²", "ΔxΔp ≥ ℏ/2", "ψ(x,t)", "Ĥψ = iℏ ∂ψ/∂t",
  "E = hν", "∇²ψ + k²ψ = 0", "C₆₀", "λ = h/mv",
  "σxσp ≥ ħ/2", "E=hf", "p=ħk", "|ψ⟩", "ρ = |ψ⟩⟨ψ|",
  "F = ma", "ΔE·Δt ≥ ħ", "Σ = ∫ψ*Ôψ dx",
];

const TARGET_DATE = new Date("2025-04-05T19:00:00+03:00");

function useCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = TARGET_DATE.getTime() - Date.now();
      if (diff <= 0) return setTime({ days: 0, hours: 0, mins: 0 });
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
      });
    };
    calc();
    const id = setInterval(calc, 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

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

function FullereneIcon({ size = 36, spin = false }: { size?: number; spin?: boolean }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 56 56" fill="none"
      style={spin ? { animation: "spin 30s linear infinite" } : undefined}
    >
      <circle cx="28" cy="28" r="25" stroke="#c9a227" strokeWidth="1" fill="none" opacity="0.35" />
      <circle cx="28" cy="28" r="17" stroke="#c9a227" strokeWidth="1" fill="none" opacity="0.55" />
      <circle cx="28" cy="11" r="3" fill="#c9a227" />
      <circle cx="28" cy="45" r="3" fill="#c9a227" />
      <circle cx="11" cy="20" r="3" fill="#c9a227" />
      <circle cx="45" cy="20" r="3" fill="#c9a227" />
      <circle cx="11" cy="36" r="3" fill="#c9a227" />
      <circle cx="45" cy="36" r="3" fill="#c9a227" />
      <line x1="28" y1="11" x2="11" y2="20" stroke="#c9a227" strokeWidth="1.2" />
      <line x1="28" y1="11" x2="45" y2="20" stroke="#c9a227" strokeWidth="1.2" />
      <line x1="11" y1="20" x2="11" y2="36" stroke="#c9a227" strokeWidth="1.2" />
      <line x1="45" y1="20" x2="45" y2="36" stroke="#c9a227" strokeWidth="1.2" />
      <line x1="11" y1="36" x2="28" y2="45" stroke="#c9a227" strokeWidth="1.2" />
      <line x1="45" y1="36" x2="28" y2="45" stroke="#c9a227" strokeWidth="1.2" />
      <line x1="11" y1="20" x2="45" y2="36" stroke="#c9a227" strokeWidth="0.5" opacity="0.35" />
      <line x1="45" y1="20" x2="11" y2="36" stroke="#c9a227" strokeWidth="0.5" opacity="0.35" />
    </svg>
  );
}

export default function Webinar() {
  const { days, hours, mins } = useCountdown();

  const formulaItems = FORMULAS.map((f, i) => ({
    text: f,
    left: `${(i * 6.5) % 94}%`,
    top: `${(i * 7.1) % 94}%`,
    size: 10 + (i % 5) * 2,
    opacity: 0.03 + (i % 4) * 0.01,
    rotate: (i % 7) * 6 - 18,
  }));

  return (
    <div style={{ background: "#06080f", color: "#e8e8f0", minHeight: "100vh", overflowX: "hidden", fontFamily: "'Golos Text', sans-serif" }}>
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

      {/* Formulas BG */}
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

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* NAV */}
        <nav style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 24px", background: "rgba(6,8,15,0.82)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(201,162,39,0.18)", position: "sticky", top: 0, zIndex: 100,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FullereneIcon size={36} />
            <div>
              <div style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: 15, color: "#c9a227" }}>Фуллерен</div>
              <div style={{ fontSize: 11, color: "#7a849a", marginTop: 1 }}>квантовая педагогика и психология</div>
            </div>
          </div>
          <div style={{
            background: "rgba(201,162,39,0.13)", border: "1px solid rgba(201,162,39,0.22)",
            color: "#e8c46a", fontSize: 12, fontWeight: 600, padding: "5px 16px", borderRadius: 100,
          }}>5 апреля · 19:00 МСК</div>
        </nav>

        {/* HERO */}
        <section style={{ minHeight: "100svh", display: "flex", alignItems: "center", padding: "70px 24px 80px", position: "relative" }}>
          <div style={{
            position: "absolute", width: 600, height: 600, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,162,39,0.1) 0%, transparent 70%)",
            filter: "blur(120px)", top: -200, left: -200, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", width: 500, height: 500, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(60,80,200,0.07) 0%, transparent 70%)",
            filter: "blur(100px)", bottom: -100, right: -100, pointerEvents: "none",
          }} />

          <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", display: "grid", gap: 48, alignItems: "center", gridTemplateColumns: "1fr" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {/* Meta pills */}
              <div className="wu-fade" style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                {[
                  { label: "5 апреля · 19:00 МСК", icon: "📅", color: "gold" },
                  { label: "Онлайн", icon: "🟢", color: "green" },
                  { label: "Бесплатно", icon: null, color: "gold" },
                ].map((p, i) => (
                  <span key={i} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: p.color === "green" ? "rgba(34,197,94,0.1)" : "rgba(201,162,39,0.13)",
                    border: `1px solid ${p.color === "green" ? "rgba(34,197,94,0.25)" : "rgba(201,162,39,0.22)"}`,
                    color: p.color === "green" ? "#4ade80" : "#e8c46a",
                    fontSize: 13, fontWeight: 600, padding: "7px 16px", borderRadius: 100,
                  }}>
                    {p.icon && <span style={{ fontSize: 13 }}>{p.icon}</span>}{p.label}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="wu-fade wu-d1" style={{
                fontFamily: "Oswald, sans-serif", fontWeight: 700,
                fontSize: "clamp(38px, 7vw, 72px)", lineHeight: 1.05,
                textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0,
              }}>
                Рождение<br />
                <span style={{ color: "#c9a227" }}>педагогического</span><br />
                <span style={{ color: "#4a5568", fontWeight: 300 }}>вдохновения</span>
              </h1>

              <p className="wu-fade wu-d2" style={{ color: "#7a849a", fontSize: "clamp(15px, 2vw, 18px)", lineHeight: 1.65, maxWidth: 540, margin: 0 }}>
                Онлайн-встреча для педагогов — о выгорании, смысле и живом творчестве в образовании
              </p>

              {/* Buttons */}
              <div className="wu-fade wu-d3" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <a href="https://vk.com/rostobraz" target="_blank" rel="noopener noreferrer"
                  className="wu-btn-gold"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "linear-gradient(135deg, #c9a227, #a07c18)",
                    color: "#06080f", fontWeight: 700, fontSize: 15,
                    padding: "13px 26px", borderRadius: 100, textDecoration: "none", transition: "all 0.25s",
                  }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 5.4c.1-.4 0-.7-.6-.7h-2c-.5 0-.7.3-.8.6 0 0-.9 2.2-2.2 3.6-.4.4-.6.5-.8.5-.1 0-.3-.1-.3-.5V5.4c0-.5-.1-.7-.6-.7H12c-.4 0-.6.3-.6.6 0 .6.9.8.9 2.5v3.7c0 .6-.1.7-.3.7-.6 0-2-2.2-2.9-4.8-.2-.5-.4-.7-.9-.7H6.2c-.6 0-.7.3-.7.6 0 .6.6 3.4 2.8 7.2 1.5 2.5 3.5 3.8 5.4 3.8 1.1 0 1.3-.2 1.3-.7v-1.8c0-.6.1-.7.5-.7.3 0 .8.2 2 1.3 1.4 1.4 1.6 2 2.4 2h2c.6 0 .9-.2.7-.8-.2-.6-.8-1.4-1.5-2.3-.4-.5-1-.1-.4-1.5 0 0 2.1-2.9 2.4-4z" /></svg>
                  Присоединиться в ВК
                </a>
                <a href="https://max.im/+79270721673" target="_blank" rel="noopener noreferrer"
                  className="wu-btn-outline"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "transparent", border: "1px solid rgba(201,162,39,0.25)",
                    color: "#e8c46a", fontWeight: 600, fontSize: 15,
                    padding: "12px 24px", borderRadius: 100, textDecoration: "none", transition: "all 0.25s",
                  }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  Связаться в Max
                </a>
              </div>
            </div>

            {/* Countdown card */}
            <div className="wu-fade wu-d4 wu-card" style={{
              background: "rgba(12,16,32,0.8)", border: "1px solid rgba(201,162,39,0.2)",
              borderRadius: 24, padding: 28, backdropFilter: "blur(20px)",
              display: "flex", flexDirection: "column", gap: 18, maxWidth: 340,
            }}>
              <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "#c9a227" }}>
                ⏱ До встречи осталось
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {[{ v: days, l: "дней" }, { v: hours, l: "часов" }, { v: mins, l: "минут" }].map((c, i) => (
                  <div key={i} style={{
                    flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
                    background: "rgba(201,162,39,0.08)", border: "1px solid rgba(201,162,39,0.2)",
                    borderRadius: 14, padding: "12px 8px",
                  }}>
                    <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 32, fontWeight: 700, color: "#e8c46a", lineHeight: 1 }}>
                      {String(c.v).padStart(2, "0")}
                    </div>
                    <div style={{ fontSize: 10, color: "#7a849a", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>{c.l}</div>
                  </div>
                ))}
              </div>
              {[
                { icon: "📅", text: <><strong style={{ color: "#e8c46a" }}>5 апреля 2025</strong> в 19:00 МСК</> },
                { icon: "🌐", text: <>Онлайн · Вход <strong style={{ color: "#e8c46a" }}>свободный</strong></> },
                { icon: "👥", text: <>Для <strong style={{ color: "#e8c46a" }}>педагогов</strong> и организаторов</> },
              ].map((r, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 14px", borderRadius: 12,
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                  fontSize: 13, color: "#e8e8f0",
                }}>
                  <span style={{ fontSize: 15 }}>{r.icon}</span>
                  <span>{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #c9a227, transparent)", opacity: 0.25, maxWidth: 1000, margin: "0 auto" }} />

        {/* FOR WHOM */}
        <section style={{ padding: "72px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(201,162,39,0.13)", border: "1px solid rgba(201,162,39,0.2)",
              color: "#c9a227", fontSize: 11, fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.12em",
              padding: "6px 16px", borderRadius: 100, marginBottom: 18,
            }}>◆ Для кого</div>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(28px,5vw,44px)", textTransform: "uppercase", color: "#e8e8f0", lineHeight: 1.1, marginBottom: 36, marginTop: 0 }}>
              Эта встреча — <span style={{ color: "#c9a227" }}>для вас</span>
            </h2>
            <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
              {[
                { icon: "🔥", title: "Педагоги на грани", text: "Для тех, кто чувствует усталость и потерю смысла и находится на стадии профессионального выгорания" },
                { icon: "✨", title: "Ищущие вдохновения", text: "Для тех, кто ищет новые смыслы в образовании и хочет вернуть радость от педагогической работы" },
                { icon: "🏛", title: "Организаторы", text: "Для руководителей учебных заведений, которые строят сильные педагогические коллективы" },
              ].map((c, i) => (
                <div key={i} className="wu-whom-card" style={{
                  background: "rgba(12,16,32,0.6)", border: "1px solid rgba(201,162,39,0.18)",
                  borderRadius: 20, padding: "28px 24px",
                  display: "flex", flexDirection: "column", gap: 14, transition: "all 0.25s",
                }}>
                  <div style={{ fontSize: 28 }}>{c.icon}</div>
                  <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 17, fontWeight: 600, color: "#e8c46a", textTransform: "uppercase", lineHeight: 1.2 }}>{c.title}</div>
                  <p style={{ fontSize: 14, color: "#7a849a", lineHeight: 1.65, margin: 0 }}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #c9a227, transparent)", opacity: 0.25, maxWidth: 1000, margin: "0 auto" }} />

        {/* TOPICS */}
        <section style={{ padding: "72px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(201,162,39,0.13)", border: "1px solid rgba(201,162,39,0.2)",
              color: "#c9a227", fontSize: 11, fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.12em",
              padding: "6px 16px", borderRadius: 100, marginBottom: 18,
            }}>◆ Программа</div>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(28px,5vw,44px)", textTransform: "uppercase", color: "#e8e8f0", lineHeight: 1.1, marginBottom: 36, marginTop: 0 }}>
              О чём будем <span style={{ color: "#c9a227" }}>говорить</span>
            </h2>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
              {[
                "Почему происходит выгорание — причины и механизмы",
                "Где искать Вдохновение — практические источники и подходы",
                "Как создать атмосферу Творчества среди педагогов",
                "От внешней мотивации (оценка, рубль) — к внутренней: радость от самого процесса",
              ].map((topic, i) => (
                <div key={i} className="wu-topic" style={{
                  display: "flex", alignItems: "flex-start", gap: 14,
                  background: "rgba(12,16,32,0.6)", border: "1px solid rgba(201,162,39,0.18)",
                  borderRadius: 16, padding: "20px 22px", transition: "all 0.25s",
                }}>
                  <div style={{ fontFamily: "Oswald, sans-serif", fontSize: 28, fontWeight: 700, color: "#c9a227", opacity: 0.4, lineHeight: 1, flexShrink: 0, width: 28 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div style={{ fontSize: 15, color: "#e8e8f0", lineHeight: 1.55, paddingTop: 4 }}>{topic}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #c9a227, transparent)", opacity: 0.25, maxWidth: 1000, margin: "0 auto" }} />

        {/* SPEAKER */}
        <section style={{ padding: "72px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(201,162,39,0.13)", border: "1px solid rgba(201,162,39,0.2)",
              color: "#c9a227", fontSize: 11, fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.12em",
              padding: "6px 16px", borderRadius: 100, marginBottom: 18,
            }}>◆ Спикер</div>
            <h2 style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(28px,5vw,44px)", textTransform: "uppercase", color: "#e8e8f0", lineHeight: 1.1, marginBottom: 40, marginTop: 0 }}>
              Ваш <span style={{ color: "#c9a227" }}>проводник</span>
            </h2>
            <div style={{ display: "grid", gap: 48, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", alignItems: "start" }}>
              {/* Photo */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 300 }}>
                <div style={{
                  borderRadius: 24, overflow: "hidden",
                  border: "2px solid rgba(201,162,39,0.25)",
                  boxShadow: "0 0 60px rgba(201,162,39,0.12)",
                  position: "relative",
                }}>
                  <img src={SPEAKER_PHOTO} alt="Ефремова Мария Викторовна"
                    style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", display: "block", filter: "grayscale(15%)" }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 60%, rgba(6,8,15,0.65) 100%)",
                  }} />
                </div>
                <div style={{
                  background: "rgba(201,162,39,0.1)", border: "1px solid rgba(201,162,39,0.2)",
                  borderRadius: 14, padding: 16, fontSize: 13,
                  color: "#e8c46a", lineHeight: 1.65, fontStyle: "italic", textAlign: "center",
                }}>
                  «Каждый участник системы образования — как атом углерода в молекуле фуллерен»
                </div>
              </div>

              {/* Info */}
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <div>
                  <div style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, fontSize: "clamp(24px,4vw,36px)", color: "#e8e8f0", lineHeight: 1.1 }}>
                    Ефремова<br />Мария Викторовна
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }}>
                    {["Руководитель", "Педагог", "Психолог", "Многодетная мама"].map((r) => (
                      <span key={r} style={{
                        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)",
                        color: "#7a849a", fontSize: 12, padding: "4px 12px", borderRadius: 100,
                      }}>{r}</span>
                    ))}
                  </div>
                </div>

                <p style={{ fontSize: 15, color: "#7a849a", lineHeight: 1.7, margin: 0 }}>
                  Основатель Центра поддержки семейного образования{" "}
                  <strong style={{ color: "#e8c46a" }}>«Вдохновение»</strong> — единого пространства,
                  где ребёнок, родитель и учитель находятся в равном партнёрстве.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Воспитание ребёнка происходит в союзе с родителем, а учитель управляет обучающим процессом через своё состояние",
                    "Ребёнок не главный, родитель не исключающий, учитель не заложник — все в равной степени влияют на процесс",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#7a849a", lineHeight: 1.6 }}>
                      <span style={{ color: "#c9a227", fontSize: 8, marginTop: 7, flexShrink: 0 }}>◆</span>
                      {item}
                    </div>
                  ))}
                </div>

                <div style={{
                  background: "rgba(12,16,32,0.7)", border: "1px solid rgba(201,162,39,0.18)",
                  borderRadius: 20, padding: 24, display: "flex", gap: 20, alignItems: "center",
                }}>
                  <FullereneIcon size={52} spin />
                  <p style={{ fontSize: 14, color: "#7a849a", lineHeight: 1.7, margin: 0 }}>
                    <strong style={{ color: "#e8c46a" }}>Квантовая педагогика</strong> — пространство,
                    где каждый не только управляет процессом своей жизни, но и берёт ответственность
                    за свои мысли и своё состояние.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div style={{
          padding: "80px 24px 100px", borderTop: "1px solid rgba(201,162,39,0.18)",
          background: "linear-gradient(to bottom, #06080f, #0c1020)",
          textAlign: "center",
        }}>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(201,162,39,0.13)", border: "1px solid rgba(201,162,39,0.2)",
              color: "#c9a227", fontSize: 11, fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.12em",
              padding: "6px 16px", borderRadius: 100, marginBottom: 20,
            }}>◆ Присоединяйтесь</div>
            <h2 style={{
              fontFamily: "Oswald, sans-serif", fontWeight: 700,
              fontSize: "clamp(32px,6vw,56px)", textTransform: "uppercase",
              lineHeight: 1.05, marginTop: 0, marginBottom: 18, color: "#e8e8f0",
            }}>
              Готовы найти<br /><span style={{ color: "#c9a227" }}>вдохновение?</span>
            </h2>
            <p style={{ color: "#7a849a", fontSize: 16, lineHeight: 1.65, marginBottom: 40 }}>
              5 апреля в 19:00 МСК — встреча, которая может изменить ваше отношение к профессии
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <a href="https://vk.com/rostobraz" target="_blank" rel="noopener noreferrer"
                className="wu-btn-vk"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "#2787F5", color: "#fff",
                  fontWeight: 700, fontSize: 15,
                  padding: "14px 28px", borderRadius: 100, textDecoration: "none", transition: "all 0.25s",
                }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 5.4c.1-.4 0-.7-.6-.7h-2c-.5 0-.7.3-.8.6 0 0-.9 2.2-2.2 3.6-.4.4-.6.5-.8.5-.1 0-.3-.1-.3-.5V5.4c0-.5-.1-.7-.6-.7H12c-.4 0-.6.3-.6.6 0 .6.9.8.9 2.5v3.7c0 .6-.1.7-.3.7-.6 0-2-2.2-2.9-4.8-.2-.5-.4-.7-.9-.7H6.2c-.6 0-.7.3-.7.6 0 .6.6 3.4 2.8 7.2 1.5 2.5 3.5 3.8 5.4 3.8 1.1 0 1.3-.2 1.3-.7v-1.8c0-.6.1-.7.5-.7.3 0 .8.2 2 1.3 1.4 1.4 1.6 2 2.4 2h2c.6 0 .9-.2.7-.8-.2-.6-.8-1.4-1.5-2.3-.4-.5-1-.1-.4-1.5 0 0 2.1-2.9 2.4-4z" /></svg>
                Сообщество педагогов в ВК
              </a>
              <a href="https://max.im/+79270721673" target="_blank" rel="noopener noreferrer"
                className="wu-btn-outline"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "transparent", border: "1px solid rgba(201,162,39,0.25)",
                  color: "#e8c46a", fontWeight: 600, fontSize: 15,
                  padding: "13px 24px", borderRadius: 100, textDecoration: "none", transition: "all 0.25s",
                }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Связаться в Max
                <span style={{ fontSize: 12, color: "#7a849a" }}>+7 927 072 16 73</span>
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer style={{
          borderTop: "1px solid rgba(201,162,39,0.15)",
          padding: "28px 24px", background: "rgba(6,8,15,0.95)",
          display: "flex", flexWrap: "wrap", justifyContent: "space-between",
          alignItems: "center", gap: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <FullereneIcon size={30} />
            <div>
              <div style={{ fontFamily: "Oswald, sans-serif", fontWeight: 600, fontSize: 14, color: "#c9a227" }}>Фуллерен</div>
              <div style={{ fontSize: 12, color: "#7a849a", marginTop: 1 }}>Центр квантовой педагогики и психологии</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.12)" }}>© 2025 · Вебинар 5 апреля · 19:00 МСК</div>
        </footer>

      </div>
    </div>
  );
}
