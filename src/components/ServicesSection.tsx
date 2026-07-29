import Icon from "@/components/ui/icon"

const services = [
  { icon: "LayoutGrid", title: "SMM под ключ" },
  { icon: "Film", title: "Продюсирование и режиссирование" },
  { icon: "Camera", title: "Операторская работа" },
  { icon: "Scissors", title: "Монтаж роликов" },
  { icon: "Bot", title: "Автоворонки и чат-боты" },
  { icon: "Tv", title: "PR, коллаборации и СМИ" },
  { icon: "Factory", title: "Контент-завод внутри компании" },
  { icon: "PenTool", title: "Написание сценариев" },
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

const borderStyles = [
  "hover:border-violet-500/50",
  "hover:border-orange-500/50",
  "hover:border-sky-500/50",
  "hover:border-emerald-500/50",
  "hover:border-pink-500/50",
  "hover:border-amber-500/50",
  "hover:border-blue-500/50",
  "hover:border-rose-500/50",
]

export function ServicesSection() {
  return (
    <section id="services" className="py-14 px-4 sm:px-6 lg:px-8 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-balance">
            Наши <span className="text-primary">услуги</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Контент и автоворонки, которые превращают просмотры в заявки
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {services.map((s, i) => (
            <div
              key={i}
              className={`p-4 rounded-2xl bg-background border-2 border-border transition-all duration-300 group flex flex-col items-center text-center gap-2 ${borderStyles[i % borderStyles.length]}`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${iconStyles[i % iconStyles.length]}`}
              >
                <Icon name={s.icon} fallback="Star" className="h-5 w-5 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-sm leading-tight">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
