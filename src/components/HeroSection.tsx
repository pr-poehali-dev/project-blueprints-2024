import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Icon from "@/components/ui/icon"

const directions = [
  "SMM ПОД КЛЮЧ",
  "REELS",
  "ПРОДЮСИРОВАНИЕ",
  "МОНТАЖ",
  "ЧАТ-БОТЫ",
  "PR И СМИ",
  "СЦЕНАРИИ",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b-2 border-foreground">
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="border-t-2 border-foreground pt-8 pb-12 md:pt-14 md:pb-20">
          <h1 className="text-[13vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.92] mb-6 animate-fade-in-up">
            Креативное
            <br />
            <span className="relative inline-block px-2 bg-accent text-accent-foreground">
              агентство
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 animate-fade-in-up animate-delay-100">
            Делаем бренды заметными.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-in-up animate-delay-200">
            <Button size="lg" variant="accent" asChild>
              <a href="#contact">
                Обсудить проект
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#portfolio">Наши клиенты</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://disk.yandex.ru/d/5otqRSgOGtzcew" target="_blank" rel="noopener noreferrer">
                <Icon name="Play" className="h-5 w-5" />
                Примеры Reels
              </a>
            </Button>
          </div>
        </div>

        {/* Бегущая строка направлений */}
        <div className="border-t-2 border-foreground py-4 overflow-hidden">
          <div className="marquee-track font-mono-tag text-sm uppercase tracking-wider">
            {[...directions, ...directions, ...directions].map((d, i) => (
              <span key={i} className="flex items-center gap-3 pr-8 flex-shrink-0">
                {d}
                <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
              </span>
            ))}
          </div>
        </div>

        {/* Контакты */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t-2 border-foreground py-6 font-mono-tag text-sm">
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
        </div>
      </div>
    </section>
  )
}