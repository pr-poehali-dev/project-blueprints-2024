import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "LayoutGrid",
    title: "SMM «под ключ»",
    desc: "Анализ конкурентов, разработка стратегии, создание постов, регулярные сторис и кросспостинг во все соцсети.",
  },
  {
    icon: "Play",
    title: "Съёмка коротких видео",
    desc: "Сценарии, съёмка Reels (на iPhone или проф. камеру), сложный монтаж с нейросетями и кликабельные обложки.",
  },
  {
    icon: "Video",
    title: "Продюсирование",
    desc: "Организация съёмок от идеи до готового ролика. С вами работает целая команда: продюсер, SMM-менеджер и оператор.",
  },
  {
    icon: "Megaphone",
    title: "PR и розыгрыши",
    desc: "Организация масштабных партнёрских интерактивов, публикации в СМИ и приглашение на ТВ («Липецкое время»).",
  },
  {
    icon: "Bot",
    title: "Разработка чат-ботов",
    desc: "Создание умных ботов для автоматизации продаж и общения с клиентами в ваших соцсетях.",
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
            Полный цикл контент-продвижения — от стратегии до результата
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl bg-background border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group ${i === 4 ? "sm:col-span-2" : ""}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary transition-all duration-300 flex-shrink-0">
                  <Icon name={s.icon} fallback="Star" className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1.5 group-hover:text-primary transition-colors">{s.title}</h3>
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
