import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "LayoutGrid",
    title: "SMM под ключ",
    points: [
      "Аудит и анализ конкурентов",
      "Визуал и оформление профиля",
      "Reels, Stories, посты",
      "Модерация комментариев и Direct",
      "Аналитика каждый месяц",
    ],
    big: true,
  },
  {
    icon: "Film",
    title: "Продюсирование и режиссирование",
    points: [
      "Креативная концепция",
      "Локации под ключ",
      "Подбор команды",
      "Контроль на площадке",
    ],
  },
  {
    icon: "Camera",
    title: "Операторская работа",
    points: [
      "Reels, обзоры, имидж-ролики",
      "Профессиональный свет",
      "Лучшие ракурсы",
    ],
  },
  {
    icon: "Scissors",
    title: "Монтаж роликов",
    points: [
      "Плотный монтаж",
      "Цветокоррекция и звук",
      "Субтитры и графика",
      "Монтаж с нейросетями",
    ],
  },
  {
    icon: "Bot",
    title: "Автоворонки и чат-боты",
    points: [
      "Логика воронки под бизнес",
      "Боты в Direct",
      "Цепочки до покупки",
    ],
  },
  {
    icon: "Tv",
    title: "PR, коллаборации и СМИ",
    points: [
      "Партнёрские спецпроекты",
      "Блогеры и кросс-промо",
      'Пресса и «Липецкое время»',
    ],
    big: true,
  },
  {
    icon: "Factory",
    title: "Контент-завод внутри компании",
    points: [
      "Обучение сотрудников",
      "Регламенты и гайды",
      "Процесс от идеи до публикации",
    ],
  },
  {
    icon: "PenTool",
    title: "Написание сценариев",
    points: [
      "Хуки, которые цепляют",
      "Раскадровка и сторителлинг",
      "Простой разговорный язык",
    ],
  },
]

const cardStyles = [
  "from-violet-500/10 to-violet-500/0 hover:border-violet-500/50",
  "from-orange-500/10 to-orange-500/0 hover:border-orange-500/50",
  "from-sky-500/10 to-sky-500/0 hover:border-sky-500/50",
  "from-emerald-500/10 to-emerald-500/0 hover:border-emerald-500/50",
  "from-pink-500/10 to-pink-500/0 hover:border-pink-500/50",
  "from-amber-500/10 to-amber-500/0 hover:border-amber-500/50",
  "from-blue-500/10 to-blue-500/0 hover:border-blue-500/50",
  "from-rose-500/10 to-rose-500/0 hover:border-rose-500/50",
]

const iconStyles = [
  "text-violet-500 bg-violet-500/10 group-hover:bg-violet-500",
  "text-orange-500 bg-orange-500/10 group-hover:bg-orange-500",
  "text-sky-500 bg-sky-500/10 group-hover:bg-sky-500",
  "text-emerald-500 bg-emerald-500/10 group-hover:bg-emerald-500",
  "text-pink-500 bg-pink-500/10 group-hover:bg-pink-500",
  "text-amber-500 bg-amber-500/10 group-hover:bg-amber-500",
  "text-blue-500 bg-blue-500/10 group-hover:bg-blue-500",
  "text-rose-500 bg-rose-500/10 group-hover:bg-rose-500",
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Что мы делаем
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Наши <span className="text-primary">услуги</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Создаем контент и выстраиваем автоворонки, которые превращают просмотры в заявки и продажи
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {services.map((s, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-3xl bg-gradient-to-br ${cardStyles[i % cardStyles.length]} bg-background border-2 border-border transition-all duration-300 group flex flex-col overflow-hidden ${
                s.big ? "sm:col-span-2" : ""
              }`}
            >
              <span className="absolute -right-3 -top-6 text-8xl font-black text-foreground/[0.04] select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className={`relative w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 mb-4 transition-all duration-300 ${iconStyles[i % iconStyles.length]}`}
              >
                <Icon name={s.icon} fallback="Star" className="h-5 w-5 group-hover:text-white transition-colors" />
              </div>

              <h3 className="relative font-black text-lg leading-tight mb-4">{s.title}</h3>

              <div className="relative flex flex-wrap gap-1.5 mt-auto">
                {s.points.map((point, j) => (
                  <span
                    key={j}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-foreground/70 border border-border/60"
                  >
                    {point}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
