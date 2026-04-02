import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "TT MEDIA полностью изменили наш Instagram. За 2 месяца с нуля набрали 8000 живых подписчиков. Каждый Reels — это маленький шедевр, который реально приводит клиентов.",
    name: "Анна К.",
    role: "Владелица фитнес-студии",
  },
  {
    quote:
      "Работаем полгода и не нарадуемся. Ребята сами придумывают идеи, снимают, монтируют. Мне нужно только одобрить. Охваты выросли в 12 раз, заявки идут каждый день.",
    name: "Дмитрий В.",
    role: "Ресторатор",
  },
  {
    quote:
      "Наконец нашли агентство, которое понимает специфику нашей ниши. Контент цепляет, стратегия работает. Стоимость заявки упала с 1500 до 300 рублей — говорит само за себя.",
    name: "Мария Т.",
    role: "Директор онлайн-школы",
  },
  {
    quote:
      "Сначала скептически отнёсся к SMM, думал это лишние расходы. Теперь 40% новых клиентов приходят именно из соцсетей. TT MEDIA — лучшая инвестиция за этот год.",
    name: "Алексей Р.",
    role: "Предприниматель",
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
          Мы работаем на результат, и наши клиенты это подтверждают. Реальные отзывы от реальных брендов.
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
