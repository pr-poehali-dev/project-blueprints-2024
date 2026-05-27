import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Phone } from "lucide-react"
import { useEffect, useState } from "react"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/15 blur-3xl animate-pulse"
          style={{ top: "10%", left: "-5%", animationDuration: "5s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl animate-pulse"
          style={{ bottom: "5%", right: "10%", animationDuration: "7s", animationDelay: "1s" }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl transition-all duration-1000 ease-out"
          style={{ left: `${mousePosition.x - 150}px`, top: `${mousePosition.y - 150}px` }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Icon
          name="Video"
          className="absolute text-muted-foreground/20 animate-float"
          style={{ top: "15%", left: "8%", animationDelay: "0s" } as React.CSSProperties}
          size={44}
        />
        <Icon
          name="TrendingUp"
          className="absolute text-muted-foreground/20 animate-float"
          style={{ top: "20%", right: "12%", animationDelay: "2s" } as React.CSSProperties}
          size={38}
        />
        <Sparkles
          className="absolute text-muted-foreground/20 animate-float"
          style={{ bottom: "25%", left: "12%", animationDelay: "1s" }}
          size={32}
        />
        <Icon
          name="Star"
          className="absolute text-muted-foreground/20 animate-float"
          style={{ bottom: "20%", right: "8%", animationDelay: "3s" } as React.CSSProperties}
          size={28}
        />
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Креативное контент-агентство</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 animate-fade-in-up text-balance leading-none">
          Контент, который{" "}
          <span className="text-primary relative inline-block">
            продаёт
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C50 5 150 5 198 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-primary"
              />
            </svg>
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
          Превращаем контент в инструмент роста: больше клиентов, доверия и продаж через соцсети, видео и стратегию.
        </p>

        {/* Лид-магнит */}
        <div className="animate-fade-in-up animate-delay-150 mb-6">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-lg shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-2xl">🎁</span>
            <span>Забери бесплатный аудит аккаунта</span>
            <span className="px-2.5 py-1 rounded-full bg-white/20 text-sm font-black">0 ₽</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-muted-foreground mt-2">Обычная цена — <span className="line-through">15 000 ₽</span> · Осталось мест на этой неделе: 3</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-10">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            asChild
          >
            <a href="#contact">
              Обсудить проект
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
            asChild
          >
            <a href="#portfolio">Наши кейсы</a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 animate-fade-in-up animate-delay-300">
          <a
            href="tel:89202424921"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="w-4 h-4 text-primary" />
            </div>
            <span className="font-medium">8-920-242-49-21</span>
          </a>
          <a
            href="https://t.me/tanshinatati"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Icon name="Send" className="w-4 h-4 text-primary" />
            </div>
            <span className="font-medium">@tanshinatati</span>
          </a>
          <a
            href="https://max.ru/u/f9LHodD0cOJ8qj86uLmsoip6PXJ8appEgljI0Nzv4mM1726-7mxqsyR_blw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Icon name="MessageSquare" className="w-4 h-4 text-primary" />
            </div>
            <span className="font-medium">MAX</span>
          </a>
        </div>
      </div>
    </section>
  )
}