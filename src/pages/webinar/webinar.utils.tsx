import { useEffect, useState } from "react";

export const SPEAKER_PHOTO =
  "https://cdn.poehali.dev/projects/766995cb-632a-44cf-867a-0b2115ca787d/bucket/c4457521-41f9-405f-adc0-ba28a5609ce1.png";

export const FORMULAS = [
  "E = mc²", "ΔxΔp ≥ ℏ/2", "ψ(x,t)", "Ĥψ = iℏ ∂ψ/∂t",
  "E = hν", "∇²ψ + k²ψ = 0", "C₆₀", "λ = h/mv",
  "σxσp ≥ ħ/2", "E=hf", "p=ħk", "|ψ⟩", "ρ = |ψ⟩⟨ψ|",
  "F = ma", "ΔE·Δt ≥ ħ", "Σ = ∫ψ*Ôψ dx",
];

export const TARGET_DATE = new Date("2025-04-05T19:00:00+03:00");

export function useCountdown() {
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

export function FullereneIcon({ size = 36, spin = false }: { size?: number; spin?: boolean }) {
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
