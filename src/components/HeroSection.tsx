import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b-2 border-foreground">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-2 pt-8 pb-4 animate-fade-in-up font-mono-tag text-xs uppercase tracking-wider text-muted-foreground">
          <span className="w-1.5 h-1.5 bg-accent" />
          Контент-агентство · Липецк
        </div>

        <div className="border-t-2 border-foreground pt-8 pb-12 md:pt-14 md:pb-20">
          <h1 className="text-[13vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.92] mb-8 animate-fade-in-up">
            Контент,
            <br />
            который{" "}
            <span className="relative inline-block px-2 bg-accent text-accent-foreground">
              продаёт
            </span>
            .
          </h1>

          <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in-up animate-delay-100">
              Превращаем контент в инструмент роста: больше клиентов, доверия и продаж через соцсети, видео и стратегию.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-in-up animate-delay-200 md:justify-end">
              <Button size="lg" variant="accent" asChild>
                <a href="#contact">
                  Обсудить проект
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#portfolio">Наши кейсы</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Лид-магнит полоса */}
        <a
          href="#contact"
          className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t-2 border-foreground py-5 animate-fade-in-up animate-delay-150 hover:bg-accent transition-colors"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono-tag text-xs uppercase tracking-wide px-2 py-1 bg-foreground text-background flex-shrink-0">
              Бесплатно
            </span>
            <span className="font-bold text-lg sm:text-xl">Заберите стратегический разбор вашего аккаунта</span>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="text-sm text-muted-foreground line-through">15 000 ₽</span>
            <span className="font-bold text-xl">0 ₽</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        {/* Контакты + видео */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t-2 border-foreground py-6 animate-fade-in-up animate-delay-300 font-mono-tag text-sm">
          <a href="tel:89202424921" className="flex items-center gap-2 hover:text-accent-foreground hover:bg-accent px-1 transition-colors">
            <Phone className="w-4 h-4" />
            8-920-242-49-21
          </a>
          <a
            href="https://t.me/tanshinatati"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent-foreground hover:bg-accent px-1 transition-colors"
          >
            <Icon name="Send" className="w-4 h-4" />
            @tanshinatati
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOJ8qj86uLmsoip6PXJ8appEgljI0Nzv4mM1726-7mxqsyR_blw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent-foreground hover:bg-accent px-1 transition-colors"
          >
            <Icon name="MessageSquare" className="w-4 h-4" />
            MAX
          </a>
          <a
            href="https://disk.yandex.ru/d/5otqRSgOGtzcew"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent-foreground hover:bg-accent px-1 transition-colors ml-auto"
          >
            <Icon name="Play" className="w-4 h-4" />
            Примеры видео
          </a>
        </div>
      </div>
    </section>
  )
}
