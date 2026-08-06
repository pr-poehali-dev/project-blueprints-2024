import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    name: "Базовый",
    tagline: "Стабильный контент по проверенной системе",
    price: "100 000",
    period: "/ мес",
    badge: null,
    features: [
      "Анализ конкурентов и разработка SMM-стратегии",
      "Контент-план на месяц",
      "10 Reels (Съёмка на айфон / проф. камеру)",
      "Минимум 6 постов и 30 историй",
      "Продюсирование съёмок «под ключ»",
      "Написание сценариев",
      "Фотосъёмка контента",
      "Создание обложек для Reels",
      "Кросспостинг",
      "Ответы на комментарии и в личных сообщениях",
      "Ежемесячная аналитика, отчётность и корректировка стратегии",
    ],
    highlighted: false,
  },
  {
    name: "Креативный",
    tagline: "Для тех, кто хочет выделяться, а не сливаться с лентой",
    price: "150 000",
    period: "/ мес",
    badge: "Не как у всех",
    features: [
      "Анализ конкурентов и разработка SMM-стратегии",
      "Контент-план на месяц",
      "10 креативных Reels (Съёмка на айфон / проф. камеру)",
      "Минимум 8 постов и 45 историй",
      "Продюсирование съёмок «под ключ»",
      "Написание сценариев",
      "Фотосъёмка контента",
      "Сложный монтаж (с использованием ИИ)",
      "Создание обложек для Reels",
      "Кросспостинг на ВСЕ доступные площадки",
      "Ответы на комментарии и в личных сообщениях",
      "Создание чат-ботов и контент-воронок",
      "Организация 1 масштабного розыгрыша с партнёрами",
      "Промо-кампания (обмен купонами с партнёрским бизнесом, создание авторского дизайна купонов)",
      "PR: выступление на ТВ «Липецкое время» или публикация в СМИ",
      "Ежемесячная аналитика, отчётность и корректировка стратегии",
    ],
    highlighted: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-8 border-b-2 border-foreground pb-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            Тарифы
          </h2>
          <span className="font-mono-tag text-xs uppercase tracking-wide text-muted-foreground hidden sm:block">
            Прозрачные цены
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-foreground md:divide-x-2 md:divide-foreground">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-6 sm:p-8 ${
                index !== 0 ? "border-t-2 md:border-t-0 border-foreground" : ""
              } ${tier.highlighted ? "bg-foreground text-background" : ""}`}
            >
              {tier.badge && (
                <span className="absolute top-0 right-0 font-mono-tag text-[10px] uppercase tracking-wide px-2.5 py-1.5 bg-accent text-accent-foreground">
                  ✦ {tier.badge}
                </span>
              )}

              <h3 className="text-2xl sm:text-3xl font-bold mb-1.5">{tier.name}</h3>
              <p className={`text-sm mb-6 leading-snug ${tier.highlighted ? "text-background/70" : "text-muted-foreground"}`}>
                {tier.tagline}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold tracking-tighter">{tier.price}</span>
                <span className={`text-sm ml-1 ${tier.highlighted ? "text-background/60" : "text-muted-foreground"}`}>
                  ₽{tier.period}
                </span>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${tier.highlighted ? "text-accent" : ""}`} />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "accent" : "outline"}
                className={`w-full ${tier.highlighted ? "!border-0" : ""}`}
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Выбрать тариф
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}