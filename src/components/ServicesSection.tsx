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

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-8 border-b-2 border-foreground pb-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            Услуги
          </h2>
          <span className="font-mono-tag text-xs uppercase tracking-wide text-muted-foreground hidden sm:block">
            {String(services.length).padStart(2, "0")} направлений
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t-2 border-l-2 border-foreground">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative p-5 border-r-2 border-b-2 border-foreground flex flex-col justify-between min-h-[140px] hover:bg-accent transition-colors duration-200 cursor-default"
            >
              <div className="flex items-start justify-between">
                <Icon name={s.icon} fallback="Star" className="h-6 w-6" />
                <span className="font-mono-tag text-[10px] text-muted-foreground group-hover:text-accent-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-bold text-sm leading-tight mt-4">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
