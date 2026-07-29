import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

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