import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "LayoutGrid",
    title: "SMM «под ключ»",
    subtitle: "Упаковка и ведение соцсетей под ключ",
    desc: "От маркетинговой стратегии и анализа конкурентов до создания регулярного контента, который транслирует ценности бренда, прогревает холодную аудиторию и готовит её к покупке.",
    badge: "Популярное",
  },
  {
    icon: "Clapperboard",
    title: "Reels-продакшн полного цикла",
    subtitle: "Съёмка + продюсирование",
    desc: "Создаем ролики, которые привлекают целевую аудиторию. Пишем продающие сценарии с «крючками», организуем съёмки силами профессиональной команды (продюсер, оператор, SMM) и делаем трендовый монтаж с нейросетями.",
    badge: "Хит",
  },
  {
    icon: "Bot",
    title: "Автоворонки и чат-боты",
    subtitle: "Продажи 24/7 без участия менеджера",
    desc: "Внедряем умных ботов, которые мгновенно выдают лид-магниты в Директ, автоматически отвечают на комментарии под Reels и доводят клиентов до покупки 24/7 без участия менеджера.",
    badge: null,
  },
  {
    icon: "Tv",
    title: "PR, коллаборации и СМИ",
    subtitle: "Взрывной рост доверия к бренду",
    desc: "Организация масштабных партнерских спецпроектов, публикации в прессе и вывод спикеров вашей компании на ТВ (включая «Липецкое время») для взрывного роста доверия к вашему бренду.",
    badge: null,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-background border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group"
            >
              {s.badge && (
                <span className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                  {s.badge}
                </span>
              )}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary transition-all duration-300 flex-shrink-0">
                  <Icon name={s.icon} fallback="Star" className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-0.5 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-xs text-primary/70 font-semibold mb-2">{s.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
