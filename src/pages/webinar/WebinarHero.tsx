import { FullereneIcon, useCountdown } from "./webinar.utils";

export default function WebinarHero() {
  const { days, hours, mins } = useCountdown();

  return (
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
  );
}

export function WebinarNav() {
  return (
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
  );
}
