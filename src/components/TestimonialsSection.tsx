import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "TT MEDIA — это не просто агентство, это партнёр по росту. За 2 месяца мы вышли с нуля на 1000 живых подписчиков, а контент набрал миллион просмотров. Системный подход, который реально работает.",
    name: "Михаил С.",
    role: "Собственник B2B-компании",
  },
  {
    quote:
      "Наконец нашли агентство, которое понимает специфику B2B. Они не просто постят — они выстраивают стратегию экспертного позиционирования. Теперь нас находят клиенты, которых мы раньше не могли достучаться.",
    name: "Елена В.",
    role: "Генеральный директор",
  },
  {
    quote:
      "Работаем на тарифе Premium — результат превзошёл ожидания. Профессиональные Reels с постановкой, коллаборации с блогерами, выход на YouTube. Бренд стал узнаваемым на рынке за 3 месяца.",
    name: "Андрей К.",
    role: "Владелец производственной компании",
  },
  {
    quote:
      "Ценю, что каждый месяц стратегия актуализируется под текущие тренды. Команда — продюсер, SMM и мобилограф — работают как единый механизм. 719 комментариев за 2 месяца — это говорит само за себя.",
    name: "Ирина М.",
    role: "Эксперт-консультант",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Премиальные клиенты, реальные результаты. Компании и эксперты, которые выбрали TT MEDIA для системного роста.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}