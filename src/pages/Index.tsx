import Icon from "@/components/ui/icon";

const SPEAKER_EFREMOVA =
  "https://cdn.poehali.dev/projects/766995cb-632a-44cf-867a-0b2115ca787d/bucket/9854b3be-5967-46d8-babd-68c9602825c2.jpg";
const SPEAKER_GRIGOREVA =
  "https://cdn.poehali.dev/projects/766995cb-632a-44cf-867a-0b2115ca787d/bucket/4c60adb4-186d-4d3e-a482-7bee35b3c546.jpg";
const SPEAKER_STOTSKAYA =
  "https://cdn.poehali.dev/projects/766995cb-632a-44cf-867a-0b2115ca787d/bucket/7a2d0375-6750-47f3-9fc2-cc0bffaa107c.jpg";

const FullereneLogo = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="26" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" opacity="0.5" />
    <circle cx="28" cy="28" r="18" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" opacity="0.7" />
    <circle cx="28" cy="12" r="3" fill="url(#logoGrad)" />
    <circle cx="28" cy="44" r="3" fill="url(#logoGrad)" />
    <circle cx="12" cy="20" r="3" fill="url(#logoGrad)" />
    <circle cx="44" cy="20" r="3" fill="url(#logoGrad)" />
    <circle cx="12" cy="36" r="3" fill="url(#logoGrad)" />
    <circle cx="44" cy="36" r="3" fill="url(#logoGrad)" />
    <line x1="28" y1="12" x2="12" y2="20" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.6" />
    <line x1="28" y1="12" x2="44" y2="20" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.6" />
    <line x1="12" y1="20" x2="12" y2="36" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.6" />
    <line x1="44" y1="20" x2="44" y2="36" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.6" />
    <line x1="12" y1="36" x2="28" y2="44" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.6" />
    <line x1="44" y1="36" x2="28" y2="44" stroke="url(#logoGrad)" strokeWidth="1" opacity="0.6" />
    <line x1="28" y1="12" x2="28" y2="44" stroke="url(#logoGrad)" strokeWidth="0.5" opacity="0.3" />
    <line x1="12" y1="20" x2="44" y2="36" stroke="url(#logoGrad)" strokeWidth="0.5" opacity="0.3" />
    <line x1="44" y1="20" x2="12" y2="36" stroke="url(#logoGrad)" strokeWidth="0.5" opacity="0.3" />
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2DFFC8" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
    </defs>
  </svg>
);

interface SpeakerCardProps {
  photo: string;
  name: string;
  title: string;
  description: string;
  topic: string;
  date: string;
  variant?: "cyan" | "purple";
  delay?: string;
}

const SpeakerCard = ({
  photo,
  name,
  title,
  description,
  topic,
  date,
  variant = "cyan",
  delay = "0s",
}: SpeakerCardProps) => {
  const isCyan = variant === "cyan";
  return (
    <div
      className="neon-card rounded-2xl p-6 md:p-8 flex flex-col gap-5 animate-slide-up"
      style={{ animationDelay: delay, animationFillMode: "both" }}
    >
      <div className="flex items-start gap-5">
        <div className="relative flex-shrink-0">
          <img
            src={photo}
            alt={name}
            className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover ${
              isCyan ? "speaker-photo" : "speaker-photo-purple"
            }`}
          />
          <div
            className={`absolute -bottom-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              isCyan ? "bg-[#2DFFC8]" : "bg-purple-500"
            } text-[#080C14]`}
          >
            ✦
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div
            className={`tag-chip inline-block mb-2 ${
              isCyan ? "date-badge" : "date-badge-purple"
            }`}
          >
            {date}
          </div>
          <h3 className="font-oswald font-semibold text-lg md:text-xl text-white leading-tight">
            {name}
          </h3>
          <p
            className={`text-sm mt-1 ${
              isCyan ? "text-[#2DFFC8]" : "text-purple-400"
            } opacity-80`}
          >
            {title}
          </p>
        </div>
      </div>

      <div
        className={`px-4 py-3 rounded-xl text-sm font-medium ${
          isCyan
            ? "bg-[rgba(45,255,200,0.06)] border border-[rgba(45,255,200,0.12)] text-[#2DFFC8]"
            : "bg-[rgba(168,85,247,0.06)] border border-[rgba(168,85,247,0.12)] text-purple-300"
        }`}
      >
        <span className="opacity-70 text-xs uppercase tracking-wider font-golos">Тема встречи:</span>
        <p className="mt-1 font-semibold">{topic}</p>
      </div>

      <p className="text-[#8899AA] text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default function Index() {
  return (
    <div className="min-h-screen font-golos" style={{ backgroundColor: "var(--dark-bg)" }}>
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-xl border-b border-[rgba(45,255,200,0.07)]"
        style={{ background: "rgba(8,12,20,0.85)" }}
      >
        <div className="flex items-center gap-3">
          <FullereneLogo />
          <div>
            <p className="font-oswald font-semibold text-white text-sm md:text-base leading-tight">
              Фуллерен
            </p>
            <p className="text-[#2DFFC8] text-xs opacity-70 leading-tight hidden md:block">
              квантовая педагогика и психология
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="#speakers"
            className="text-[#8899AA] hover:text-[#2DFFC8] transition-colors text-sm font-medium hidden md:block"
          >
            Спикеры
          </a>
          <a
            href="#contacts"
            className="text-[#8899AA] hover:text-[#2DFFC8] transition-colors text-sm font-medium hidden md:block"
          >
            Контакты
          </a>
          <a
            href="#contacts"
            className="btn-neon px-5 py-2 rounded-xl text-sm font-oswald font-semibold uppercase tracking-widest"
          >
            Записаться
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-bg grid-lines relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-24 pb-20 overflow-hidden">
        <div
          className="orb-1 absolute top-1/4 left-10 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(45,255,200,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="orb-2 absolute bottom-1/4 right-10 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(96,165,250,0.03) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="animate-slide-up inline-flex items-center gap-2 date-badge tag-chip mb-8">
            <span className="w-2 h-2 rounded-full bg-[#2DFFC8] animate-pulse-glow inline-block" />
            10 и 17 апреля · Встречи со специалистами
          </div>

          <h1 className="animate-slide-up-delay font-oswald font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-4 uppercase tracking-tight">
            Центр квантовой{" "}
            <span className="block highlight-cyan">педагогики</span>
            <span className="text-white/40 text-3xl md:text-4xl lg:text-5xl font-light normal-case tracking-normal mt-2 block">
              и психологии
            </span>
          </h1>

          <div className="animate-slide-up-delay2 flex justify-center my-8">
            <div className="relative">
              <div
                className="absolute inset-0 blur-2xl opacity-30"
                style={{ background: "radial-gradient(circle, #2DFFC8, #A855F7)" }}
              />
              <svg
                width="120"
                height="120"
                viewBox="0 0 56 56"
                fill="none"
                className="rotate-logo relative z-10"
              >
                <circle cx="28" cy="28" r="26" stroke="url(#lg1)" strokeWidth="1.5" fill="none" opacity="0.5" />
                <circle cx="28" cy="28" r="18" stroke="url(#lg1)" strokeWidth="1.5" fill="none" opacity="0.7" />
                <circle cx="28" cy="12" r="3" fill="url(#lg1)" />
                <circle cx="28" cy="44" r="3" fill="url(#lg1)" />
                <circle cx="12" cy="20" r="3" fill="url(#lg1)" />
                <circle cx="44" cy="20" r="3" fill="url(#lg1)" />
                <circle cx="12" cy="36" r="3" fill="url(#lg1)" />
                <circle cx="44" cy="36" r="3" fill="url(#lg1)" />
                <line x1="28" y1="12" x2="12" y2="20" stroke="url(#lg1)" strokeWidth="1" opacity="0.6" />
                <line x1="28" y1="12" x2="44" y2="20" stroke="url(#lg1)" strokeWidth="1" opacity="0.6" />
                <line x1="12" y1="20" x2="12" y2="36" stroke="url(#lg1)" strokeWidth="1" opacity="0.6" />
                <line x1="44" y1="20" x2="44" y2="36" stroke="url(#lg1)" strokeWidth="1" opacity="0.6" />
                <line x1="12" y1="36" x2="28" y2="44" stroke="url(#lg1)" strokeWidth="1" opacity="0.6" />
                <line x1="44" y1="36" x2="28" y2="44" stroke="url(#lg1)" strokeWidth="1" opacity="0.6" />
                <line x1="28" y1="12" x2="28" y2="44" stroke="url(#lg1)" strokeWidth="0.5" opacity="0.3" />
                <line x1="12" y1="20" x2="44" y2="36" stroke="url(#lg1)" strokeWidth="0.5" opacity="0.3" />
                <line x1="44" y1="20" x2="12" y2="36" stroke="url(#lg1)" strokeWidth="0.5" opacity="0.3" />
                <defs>
                  <linearGradient id="lg1" x1="0" y1="0" x2="56" y2="56" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2DFFC8" />
                    <stop offset="100%" stopColor="#A855F7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <p className="animate-slide-up-delay2 text-[#8899AA] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
            Приглашаем родителей, столкнувшихся с{" "}
            <span className="text-[#2DFFC8]">СДВГ, расстройствами аутичного спектра</span>, а также
            близких взрослых с{" "}
            <span className="text-purple-400">деменцией и Альцгеймером</span>
          </p>

          <div className="animate-slide-up-delay3 flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-10">
            <div className="flex items-center gap-3 neon-card rounded-2xl px-6 py-4">
              <div className="w-10 h-10 rounded-xl bg-[rgba(45,255,200,0.1)] flex items-center justify-center">
                <Icon name="Calendar" size={20} className="text-[#2DFFC8]" />
              </div>
              <div className="text-left">
                <p className="font-oswald font-bold text-white text-xl">10 апреля</p>
                <p className="text-[#2DFFC8] text-xs opacity-80">Психология · Нейропсихология</p>
              </div>
            </div>
            <div
              className="hidden sm:block w-8 h-px"
              style={{ background: "linear-gradient(90deg, rgba(45,255,200,0.4), rgba(168,85,247,0.4))" }}
            />
            <div className="flex items-center gap-3 neon-card rounded-2xl px-6 py-4">
              <div className="w-10 h-10 rounded-xl bg-[rgba(168,85,247,0.1)] flex items-center justify-center">
                <Icon name="Calendar" size={20} className="text-purple-400" />
              </div>
              <div className="text-left">
                <p className="font-oswald font-bold text-white text-xl">17 апреля</p>
                <p className="text-purple-400 text-xs opacity-80">Микробиология · Ароматерапия</p>
              </div>
            </div>
          </div>

          <a
            href="#contacts"
            className="animate-slide-up-delay3 btn-neon inline-block px-10 py-4 rounded-2xl text-base font-oswald font-bold uppercase tracking-widest"
          >
            Зарегистрироваться на встречу
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-[#8899AA] uppercase tracking-wider">прокрутить</span>
          <Icon name="ChevronDown" size={16} className="text-[#2DFFC8] animate-bounce" />
        </div>
      </section>

      {/* Three approaches */}
      <section className="relative px-6 md:px-12 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "Brain",
              title: "Квантовая психология",
              text: "Работа с состоянием родителей как инструмент помощи детям",
              color: "cyan",
            },
            {
              icon: "Zap",
              title: "Нейропсихология",
              text: "Научно обоснованные методики развития пластичности мозга",
              color: "blue",
            },
            {
              icon: "Leaf",
              title: "Телесные практики",
              text: "Ароматерапия как дополнение в работе с неврологическими нарушениями",
              color: "purple",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="neon-card rounded-2xl p-6 flex flex-col gap-4 animate-slide-up"
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "both" }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  item.color === "cyan"
                    ? "bg-[rgba(45,255,200,0.1)]"
                    : item.color === "blue"
                    ? "bg-[rgba(96,165,250,0.1)]"
                    : "bg-[rgba(168,85,247,0.1)]"
                }`}
              >
                <Icon
                  name={item.icon as "Brain"}
                  size={22}
                  className={
                    item.color === "cyan"
                      ? "text-[#2DFFC8]"
                      : item.color === "blue"
                      ? "text-blue-400"
                      : "text-purple-400"
                  }
                />
              </div>
              <h3 className="font-oswald font-semibold text-white text-lg">{item.title}</h3>
              <p className="text-[#8899AA] text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="px-6 md:px-12 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 date-badge tag-chip mb-4">
              <Icon name="Users" size={12} className="text-[#2DFFC8]" />
              Наши спикеры
            </div>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl text-white uppercase tracking-tight">
              Три встречи —
              <span className="block highlight-cyan">три подхода</span>
            </h2>
          </div>

          {/* 10 апреля */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="date-badge px-5 py-2 rounded-full font-oswald font-bold text-lg whitespace-nowrap">
                10 апреля
              </div>
              <div className="flex-1 section-divider" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <SpeakerCard
                photo={SPEAKER_EFREMOVA}
                name="Ефремова Мария Викторовна"
                title="Специалист квантовой психологии"
                topic="Как помочь ребёнку через состояние родителей?"
                description='Основатель Центра поддержки семейного образования "Вдохновение" с 9-летним опытом работы в области родительско-детских отношений. В её классе дети, у которых диагностировали отсутствие внимания, теперь находят ошибки у учителей.'
                date="10 апреля"
                variant="cyan"
                delay="0s"
              />
              <SpeakerCard
                photo={SPEAKER_GRIGOREVA}
                name="Григорьева Надежда Александровна"
                title="Специалист по нейропсихологии"
                topic="Как помочь ребёнку через методики нейропсихологии?"
                description='Основатель центра раннего развития "Умка", педагог-наставник Всероссийского конкурса "Большая перемена". Убеждена: мозг каждого ребёнка пластичен — помочь можно каждому.'
                date="10 апреля"
                variant="cyan"
                delay="0.2s"
              />
            </div>
          </div>

          {/* 17 апреля */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="date-badge-purple px-5 py-2 rounded-full font-oswald font-bold text-lg whitespace-nowrap">
                17 апреля
              </div>
              <div
                className="flex-1"
                style={{
                  height: 1,
                  background: "linear-gradient(90deg, rgba(168,85,247,0.4), transparent)",
                }}
              />
            </div>
            <div className="max-w-xl">
              <SpeakerCard
                photo={SPEAKER_STOTSKAYA}
                name="Стоцкая Екатерина"
                title="Микробиолог · Выпускница МГУ · Москва"
                topic="Как помочь ребёнку и родителю через тело?"
                description='Гость нашего города из Москвы. Создатель курса "Аутизм и ароматерапия" — за 4 года более 3300 участников. Люди с неврологическими нарушениями (аутизм, деменция, Альцгеймер) значительно улучшили качество жизни.'
                date="17 апреля"
                variant="purple"
                delay="0s"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="section-divider" />
      </div>

      {/* Contacts */}
      <section id="contacts" className="px-6 md:px-12 py-20 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 date-badge tag-chip mb-4">
            <Icon name="MapPin" size={12} className="text-[#2DFFC8]" />
            Контакты
          </div>
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-white uppercase tracking-tight mb-4">
            Хотите прийти?
          </h2>
          <p className="text-[#8899AA] text-lg mb-12">
            Напишите нам — расскажем об адресе, времени и формате встреч
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-xl mx-auto">
            {[
              { icon: "Phone", label: "Юлия Кот", value: "+7 927 072 16 17", color: "cyan" },
              { icon: "MapPin", label: "Адрес", value: "г. Астрахань, Комсомольская Набережная, 22", color: "purple" },
            ].map((c, i) => (
              <div
                key={i}
                className="neon-card rounded-2xl p-5 flex flex-col items-center gap-3 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    c.color === "cyan"
                      ? "bg-[rgba(45,255,200,0.1)]"
                      : c.color === "purple"
                      ? "bg-[rgba(168,85,247,0.1)]"
                      : "bg-[rgba(96,165,250,0.1)]"
                  }`}
                >
                  <Icon
                    name={c.icon as "Phone"}
                    size={20}
                    className={
                      c.color === "cyan"
                        ? "text-[#2DFFC8]"
                        : c.color === "purple"
                        ? "text-purple-400"
                        : "text-blue-400"
                    }
                  />
                </div>
                <div>
                  <p className="text-[#8899AA] text-xs uppercase tracking-wider">{c.label}</p>
                  <p className="text-white font-medium mt-1">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="btn-neon inline-block px-12 py-4 rounded-2xl text-base font-oswald font-bold uppercase tracking-widest"
          >
            Зарегистрироваться
          </a>

          <p className="text-[#8899AA] text-xs mt-6 opacity-60">
            Центр квантовой педагогики и психологии «Фуллерен»
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[rgba(45,255,200,0.07)] px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FullereneLogo />
            <div>
              <p className="font-oswald font-semibold text-white text-sm">Фуллерен</p>
              <p className="text-[#8899AA] text-xs">Центр квантовой педагогики и психологии</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[#8899AA] text-sm">
            <a href="#speakers" className="hover:text-[#2DFFC8] transition-colors">
              Спикеры
            </a>
            <a href="#contacts" className="hover:text-[#2DFFC8] transition-colors">
              Контакты
            </a>
          </div>
          <p className="text-[#8899AA] text-xs opacity-50">© 2025 Фуллерен</p>
        </div>
      </footer>
    </div>
  );
}