import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Icon from "@/components/ui/icon"

const audience = [
  "Переросли формат «просто вести соцсети»",
  "Хотят, чтобы их выбирали за статус и экспертизу, а не только цену",
  "Готовы инвестировать в системный рост личного и корпоративного бренда",
  "Ценят качество и результат, а не массовость",
]

const results = [
  { icon: "TrendingUp", value: 1000, suffix: "+", label: "подписчиков за 2 месяца с нуля", color: "text-emerald-500" },
  { icon: "Eye", value: 1000000, suffix: "", label: "просмотров контента за 2 месяца", color: "text-blue-500" },
  { icon: "MessageCircle", value: 719, suffix: "", label: "комментариев за 2 месяца", color: "text-primary" },
  { icon: "Bookmark", value: 1920, suffix: "", label: "сохранений за 2 месяца", color: "text-amber-500" },
]

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  const formatted =
    target >= 1000000
      ? (count / 1000000).toFixed(count >= 1000000 ? 0 : 1) + "M"
      : target >= 1000
      ? count >= 1000
        ? (count / 1000).toFixed(0) + "K"
        : count.toString()
      : count.toString()

  return <span ref={ref}>{formatted}{suffix}</span>
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Для кого */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              Для кого мы работаем
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              Стратегии для <span className="text-primary">компаний и экспертов</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">которые:</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {audience.map((item, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <p className="text-sm leading-relaxed font-medium">{item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Кейсы с анимацией */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <Icon name="Rocket" fallback="Star" className="h-4 w-4" />
              Доказанные результаты
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              Цифры, которые <span className="text-primary">говорят сами</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы не просто создаём контент — мы создаём результат, который приводит клиентов и формирует экспертный статус.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((item, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group text-center">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} fallback="Star" className={`h-7 w-7 ${item.color}`} />
                  </div>
                  <div className={`text-4xl font-black mb-2 ${item.color}`}>
                    <AnimatedNumber target={item.value} suffix={item.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
