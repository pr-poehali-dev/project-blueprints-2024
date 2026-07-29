import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    name: "Стартовый",
    price: "70 000",
    period: "/ мес",
    badge: null,
    features: [
      "Анализ конкурентов и разработка SMM-стратегии",
      "Контент-план на месяц",
      "10 Reels (Съёмка на айфон)",
      "Минимум 4 поста и 20 историй",
      "Продюсирование съёмок «под ключ»",
      "Написание сценариев",
      "Создание обложек для Reels",
      "Кросспостинг",
      "Ежемесячная аналитика, отчётность и корректировка стратегии",
    ],
    highlighted: false,
  },
  {
    name: "Активный рост",
    price: "100 000",
    period: "/ мес",
    badge: null,
    features: [
      "Анализ конкурентов и разработка SMM-стратегии",
      "Контент-план на месяц",
      "12 Reels (Съёмка на айфон / проф. камеру)",
      "Минимум 6 постов и 30 историй",
      "Продюсирование съёмок «под ключ»",
      "Написание сценариев",
      "Фотосъёмка контента (профессиональная съёмка продукта или эксперта)",
      "Создание обложек для Reels",
      "Кросспостинг",
      "Ответы на комментарии и в личных сообщениях",
      "Организация 1 масштабного розыгрыша с партнёрами",
      "Промо-кампания (обмен купонами с партнёрским бизнесом, создание авторского дизайна купонов)",
      "Чат-боты для автоматизации продаж",
      "Ежемесячная аналитика, отчётность и корректировка стратегии",
    ],
    highlighted: false,
  },
  {
    name: "VIP Продвижение",
    price: "150 000",
    period: "/ мес",
    badge: "Популярный",
    features: [
      "Анализ конкурентов и разработка SMM-стратегии",
      "Контент-план на месяц",
      "15 Reels (Съёмка на айфон / проф. камеру)",
      "Минимум 8 постов и 45 историй",
      "Продюсирование съёмок «под ключ»",
      "Написание сценариев",
      "Фотосъёмка контента (профессиональная съёмка продукта или эксперта)",
      "Сложный монтаж (с использованием ИИ)",
      "Создание обложек для Reels",
      "Кросспостинг на ВСЕ доступные площадки",
      "Ответы на комментарии и в личных сообщениях",
      "Создание чат-ботов и воронок продаж с ИИ",
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

        <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-foreground md:divide-x-2 md:divide-foreground">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative flex flex-col p-6 sm:p-7 ${
                index !== 0 ? "border-t-2 md:border-t-0 border-foreground" : ""
              } ${tier.highlighted ? "bg-foreground text-background" : ""}`}
            >
              {tier.badge && (
                <span className="absolute top-0 right-0 font-mono-tag text-[10px] uppercase tracking-wide px-2 py-1 bg-accent text-accent-foreground">
                  {tier.badge}
                </span>
              )}

              <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold tracking-tighter">{tier.price}</span>
                <span className={`text-sm ml-1 ${tier.highlighted ? "text-background/60" : "text-muted-foreground"}`}>
                  ₽{tier.period}
                </span>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 flex-shrink-0 mt-0.5" />
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