import Icon from "@/components/ui/icon";

const SPEAKER_EFREMOVA =
  "https://cdn.poehali.dev/projects/766995cb-632a-44cf-867a-0b2115ca787d/bucket/c4457521-41f9-405f-adc0-ba28a5609ce1.png";
const SPEAKER_GRIGOREVA =
  "https://cdn.poehali.dev/projects/766995cb-632a-44cf-867a-0b2115ca787d/bucket/4c60adb4-186d-4d3e-a482-7bee35b3c546.jpg";
const SPEAKER_STOTSKAYA =
  "https://cdn.poehali.dev/projects/766995cb-632a-44cf-867a-0b2115ca787d/bucket/7a2d0375-6750-47f3-9fc2-cc0bffaa107c.jpg";

const FullereneLogo = () => (
  <svg width="40" height="40" viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="26" stroke="#1a9e6e" strokeWidth="1.5" fill="none" opacity="0.4" />
    <circle cx="28" cy="28" r="18" stroke="#1a9e6e" strokeWidth="1.5" fill="none" opacity="0.6" />
    <circle cx="28" cy="12" r="3" fill="#1a9e6e" />
    <circle cx="28" cy="44" r="3" fill="#1a9e6e" />
    <circle cx="12" cy="20" r="3" fill="#1a9e6e" />
    <circle cx="44" cy="20" r="3" fill="#1a9e6e" />
    <circle cx="12" cy="36" r="3" fill="#1a9e6e" />
    <circle cx="44" cy="36" r="3" fill="#1a9e6e" />
    <line x1="28" y1="12" x2="12" y2="20" stroke="#1a9e6e" strokeWidth="1" opacity="0.5" />
    <line x1="28" y1="12" x2="44" y2="20" stroke="#1a9e6e" strokeWidth="1" opacity="0.5" />
    <line x1="12" y1="20" x2="12" y2="36" stroke="#1a9e6e" strokeWidth="1" opacity="0.5" />
    <line x1="44" y1="20" x2="44" y2="36" stroke="#1a9e6e" strokeWidth="1" opacity="0.5" />
    <line x1="12" y1="36" x2="28" y2="44" stroke="#1a9e6e" strokeWidth="1" opacity="0.5" />
    <line x1="44" y1="36" x2="28" y2="44" stroke="#1a9e6e" strokeWidth="1" opacity="0.5" />
  </svg>
);

interface SpeakerCardProps {
  photo: string;
  name: string;
  title: string;
  description: string;
  topic: string;
  date: string;
  variant?: "green" | "purple";
  delay?: string;
}

const SpeakerCard = ({
  photo,
  name,
  title,
  description,
  topic,
  date,
  variant = "green",
  delay = "0s",
}: SpeakerCardProps) => {
  const isGreen = variant === "green";
  return (
    <div
      className="min-card p-6 md:p-8 flex flex-col gap-5 animate-slide-up"
      style={{ animationDelay: delay, animationFillMode: "both" }}
    >
      <div className="flex items-start gap-4">
        <img
          src={photo}
          alt={name}
          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-cover speaker-photo flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <div className={isGreen ? "badge-green" : "badge-purple"} style={{ marginBottom: 8 }}>
            {date}
          </div>
          <h3 className="font-oswald font-semibold text-lg text-gray-900 leading-tight mt-1">
            {name}
          </h3>
          <p className={`text-sm mt-1 ${isGreen ? "text-[#1a9e6e]" : "text-[#6d28d9]"}`}>
            {title}
          </p>
        </div>
      </div>

      <div className={`px-4 py-3 rounded-xl text-sm ${
        isGreen
          ? "bg-[#e8f7f1] text-[#1a9e6e]"
          : "bg-[#f3f0ff] text-[#6d28d9]"
      }`}>
        <span className="text-xs uppercase tracking-wider opacity-60 font-semibold block mb-1">Тема встречи</span>
        <p className="font-semibold leading-snug">{topic}</p>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default function Index() {
  return (
    <div className="min-h-screen font-golos bg-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center gap-3">
          <FullereneLogo />
          <div>
            <p className="font-oswald font-semibold text-gray-900 text-sm md:text-base leading-tight">
              Фуллерен
            </p>
            <p className="text-[#1a9e6e] text-xs leading-tight hidden md:block">
              квантовая педагогика и психология
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.fullerenclub.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-700 transition-colors text-sm hidden md:block"
          >
            Сайт центра
          </a>
          <a href="#speakers" className="text-gray-400 hover:text-gray-700 transition-colors text-sm hidden md:block">
            Спикеры
          </a>
          <a
            href="#contacts"
            className="text-sm font-semibold text-white bg-gray-900 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            Контакты
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-28 pb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-slide-up badge-gray mb-8">
            10 и 17 апреля · Встречи со специалистами
          </div>

          <h1 className="animate-slide-up-delay font-oswald font-bold text-5xl md:text-7xl lg:text-8xl text-gray-900 leading-none mb-6 uppercase tracking-tight">
            Центр{" "}
            <span className="highlight-green">квантовой</span>
            <br />
            <span className="text-gray-900">педагогики</span>
            <span className="block text-gray-300 text-3xl md:text-4xl font-light normal-case tracking-normal mt-3">
              и психологии
            </span>
          </h1>

          <div className="animate-slide-up-delay flex justify-center my-10">
            <svg width="80" height="80" viewBox="0 0 56 56" fill="none" className="rotate-logo opacity-30">
              <circle cx="28" cy="28" r="26" stroke="#1a9e6e" strokeWidth="1.5" fill="none" />
              <circle cx="28" cy="28" r="18" stroke="#1a9e6e" strokeWidth="1.5" fill="none" />
              <circle cx="28" cy="12" r="3" fill="#1a9e6e" />
              <circle cx="28" cy="44" r="3" fill="#1a9e6e" />
              <circle cx="12" cy="20" r="3" fill="#1a9e6e" />
              <circle cx="44" cy="20" r="3" fill="#1a9e6e" />
              <circle cx="12" cy="36" r="3" fill="#1a9e6e" />
              <circle cx="44" cy="36" r="3" fill="#1a9e6e" />
              <line x1="28" y1="12" x2="12" y2="20" stroke="#1a9e6e" strokeWidth="1" />
              <line x1="28" y1="12" x2="44" y2="20" stroke="#1a9e6e" strokeWidth="1" />
              <line x1="12" y1="20" x2="12" y2="36" stroke="#1a9e6e" strokeWidth="1" />
              <line x1="44" y1="20" x2="44" y2="36" stroke="#1a9e6e" strokeWidth="1" />
              <line x1="12" y1="36" x2="28" y2="44" stroke="#1a9e6e" strokeWidth="1" />
              <line x1="44" y1="36" x2="28" y2="44" stroke="#1a9e6e" strokeWidth="1" />
              <line x1="28" y1="12" x2="28" y2="44" stroke="#1a9e6e" strokeWidth="0.5" opacity="0.5" />
              <line x1="12" y1="20" x2="44" y2="36" stroke="#1a9e6e" strokeWidth="0.5" opacity="0.5" />
              <line x1="44" y1="20" x2="12" y2="36" stroke="#1a9e6e" strokeWidth="0.5" opacity="0.5" />
            </svg>
          </div>

          <p className="animate-slide-up-delay2 text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Приглашаем родителей, столкнувшихся с{" "}
            <span className="text-gray-900 font-medium">СДВГ, расстройствами аутичного спектра</span>,
            а также близких взрослых с{" "}
            <span className="text-gray-900 font-medium">деменцией и Альцгеймером</span>
          </p>

          <div className="animate-slide-up-delay3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4 bg-white">
              <div className="w-9 h-9 rounded-xl bg-[#e8f7f1] flex items-center justify-center">
                <Icon name="Calendar" size={18} className="text-[#1a9e6e]" />
              </div>
              <div className="text-left">
                <p className="font-oswald font-bold text-gray-900 text-lg leading-none">10 апреля</p>
                <p className="text-[#1a9e6e] text-xs mt-0.5">Психология · Нейропсихология</p>
              </div>
            </div>
            <div className="hidden sm:block w-6 h-px bg-gray-200" />
            <div className="flex items-center gap-3 border border-gray-200 rounded-2xl px-5 py-4 bg-white">
              <div className="w-9 h-9 rounded-xl bg-[#f3f0ff] flex items-center justify-center">
                <Icon name="Calendar" size={18} className="text-[#6d28d9]" />
              </div>
              <div className="text-left">
                <p className="font-oswald font-bold text-gray-900 text-lg leading-none">17 апреля</p>
                <p className="text-[#6d28d9] text-xs mt-0.5">Микробиология · Ароматерапия</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
          <span className="text-xs text-gray-400 uppercase tracking-wider">прокрутить</span>
          <Icon name="ChevronDown" size={14} className="text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* Three approaches */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: "Brain",
              title: "Квантовая психология",
              text: "Работа с состоянием родителей как инструмент помощи детям",
              color: "green",
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
              className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-3 animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both" }}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  item.color === "green"
                    ? "bg-[#e8f7f1]"
                    : item.color === "blue"
                    ? "bg-[#eef3ff]"
                    : "bg-[#f3f0ff]"
                }`}
              >
                <Icon
                  name={item.icon as "Brain"}
                  size={20}
                  className={
                    item.color === "green"
                      ? "text-[#1a9e6e]"
                      : item.color === "blue"
                      ? "text-[#3b6fd4]"
                      : "text-[#6d28d9]"
                  }
                />
              </div>
              <h3 className="font-oswald font-semibold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="px-6 md:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <div className="badge-gray mb-4">
              <Icon name="Users" size={11} className="inline mr-1.5 -mt-0.5" />
              Наши спикеры
            </div>
            <h2 className="font-oswald font-bold text-4xl md:text-5xl text-gray-900 uppercase tracking-tight">
              Три встречи —{" "}
              <span className="highlight-green">три подхода</span>
            </h2>
          </div>

          {/* 10 апреля */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <span className="badge-green text-sm px-4 py-1.5 font-oswald font-bold whitespace-nowrap">
                10 апреля
              </span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <SpeakerCard
                photo={SPEAKER_EFREMOVA}
                name="Ефремова Мария Викторовна"
                title="Специалист квантовой психологии"
                topic="Как помочь ребёнку через состояние родителей?"
                description='Основатель Центра поддержки семейного образования "Вдохновение" с 9-летним опытом работы в области родительско-детских отношений. В её классе дети, у которых диагностировали отсутствие внимания, теперь находят ошибки у учителей.'
                date="10 апреля"
                variant="green"
                delay="0s"
              />
              <SpeakerCard
                photo={SPEAKER_GRIGOREVA}
                name="Григорьева Надежда Александровна"
                title="Специалист по нейропсихологии"
                topic="Как помочь ребёнку через методики нейропсихологии?"
                description='Основатель центра раннего развития "Умка", педагог-наставник Всероссийского конкурса "Большая перемена". Убеждена: мозг каждого ребёнка пластичен — помочь можно каждому.'
                date="10 апреля"
                variant="green"
                delay="0.1s"
              />
            </div>
          </div>

          {/* 17 апреля */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="badge-purple text-sm px-4 py-1.5 font-oswald font-bold whitespace-nowrap">
                17 апреля
              </span>
              <div className="flex-1 h-px bg-gray-100" />
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
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gray-100" />
      </div>

      {/* Contacts */}
      <section id="contacts" className="px-6 md:px-12 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="badge-gray mb-6">
            <Icon name="MapPin" size={11} className="inline mr-1.5 -mt-0.5" />
            Контакты
          </div>
          <h2 className="font-oswald font-bold text-4xl md:text-5xl text-gray-900 uppercase tracking-tight mb-4">
            Хотите прийти?
          </h2>
          <p className="text-gray-400 text-lg mb-12">
            Напишите нам — расскажем об адресе, времени и формате встреч
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-lg mx-auto">
            {[
              { icon: "Phone", label: "Юлия Кот", value: "+7 927 072 16 17", color: "green" },
              { icon: "MapPin", label: "Адрес", value: "г. Астрахань, Комсомольская Набережная, 22", color: "purple" },
            ].map((c, i) => (
              <div key={i} className="min-card p-5 flex flex-col items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    c.color === "green" ? "bg-[#e8f7f1]" : "bg-[#f3f0ff]"
                  }`}
                >
                  <Icon
                    name={c.icon as "Phone"}
                    size={18}
                    className={c.color === "green" ? "text-[#1a9e6e]" : "text-[#6d28d9]"}
                  />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">{c.label}</p>
                  <p className="text-gray-900 font-medium mt-1 text-sm">{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://max.ru/ВСТАВЬ_ССЫЛКУ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gray-900 text-white font-semibold text-sm transition-all duration-200 hover:bg-gray-700 hover:-translate-y-0.5 mt-2 mb-8"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M7 17V8.5L12 14l5-5.5V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Связаться в Max
            <span className="text-white/40 font-normal text-xs">+7 927 072 16 73</span>
          </a>

          <p className="text-gray-300 text-xs">
            Центр квантовой педагогики и психологии «Фуллерен»
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 md:px-12 py-8 bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FullereneLogo />
            <div>
              <p className="font-oswald font-semibold text-gray-900 text-sm">Фуллерен</p>
              <p className="text-gray-400 text-xs">Центр квантовой педагогики и психологии</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <a href="https://www.fullerenclub.ru/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">
              Сайт центра
            </a>
            <a href="#speakers" className="hover:text-gray-700 transition-colors">Спикеры</a>
            <a href="#contacts" className="hover:text-gray-700 transition-colors">Контакты</a>
          </div>
          <p className="text-gray-300 text-xs">© 2025 Фуллерен</p>
        </div>
      </footer>
    </div>
  );
}