import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function AuditSection() {
  return (
    <section id="audit" className="py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-foreground bg-accent/10">
      <div className="container mx-auto max-w-4xl">
        <div className="border-2 border-foreground p-8 sm:p-12 text-center bg-background">
          <span className="inline-block font-mono-tag text-xs uppercase tracking-wide px-3 py-1.5 bg-accent text-accent-foreground mb-6">
            Бесплатно · вместо 15 000 ₽
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-8 text-balance">
            Стратегический разбор вашего аккаунта
          </h2>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              variant="accent"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Записаться на разбор
              <Icon name="ArrowRight" className="ml-1 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://disk.yandex.ru/d/CPJUvEsaYro3Ug" target="_blank" rel="noopener noreferrer">
                <Icon name="FileText" className="mr-1 h-5 w-5" />
                Пример аудита
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
