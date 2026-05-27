import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const steps = [
  {
    number: "01",
    icon: "Search",
    title: "Анализируем текущую ситуацию",
    desc: "Детально изучаем ваши аккаунты: контент, визуал, охваты, вовлечённость и поведение аудитории. Сравниваем с конкурентами.",
  },
  {
    number: "02",
    icon: "AlertCircle",
    title: "Указываем на дыры",
    desc: "Честно говорим, что сейчас мешает росту: слабые точки в контенте, ошибки в упаковке, упущенные возможности.",
  },
  {
    number: "03",
    icon: "Map",
    title: "Даём пошаговый план стратегии",
    desc: "Предлагаем конкретный план действий, который позволит увеличить продажи и узнаваемость бренда в соцсетях.",
  },
]

export function AuditSection() {
  return (
    <section id="audit" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl">
        {/* Шапка */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
            <span className="text-base">🎁</span>
            Бесплатно · Обычная цена <span className="line-through opacity-60 mx-1">15 000 ₽</span> → 0 ₽
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Стратегический разбор <span className="text-primary">вашего аккаунта</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Формат — живая встреча или созвон с продюсером. Без шаблонов и воды: только конкретика под ваш бизнес.
          </p>
        </div>

        {/* Шаги */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-background border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary transition-all duration-300 flex items-center justify-center">
                    <Icon name={step.icon} fallback="Star" className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-black text-primary/40 mb-1 tracking-widest">{step.number}</p>
                  <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors leading-tight">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg shadow-lg shadow-primary/25 hover:shadow-xl transition-all group"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="mr-2">🎁</span>
            Записаться на бесплатный разбор
            <Icon name="ArrowRight" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-border hover:border-primary font-semibold px-8 py-6 text-lg group"
            asChild
          >
            <a href="https://disk.yandex.ru/d/CPJUvEsaYro3Ug" target="_blank" rel="noopener noreferrer">
              <Icon name="FileText" className="mr-2 h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              Посмотреть пример аудита
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
