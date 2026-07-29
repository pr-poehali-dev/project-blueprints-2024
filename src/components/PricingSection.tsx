import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
      "Ежемесячная аналитика, отчётность и корректировка стратегии",
    ],
    highlighted: false,
  },
  {
    name: "VIP Продвижение",
    price: "120 000",
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
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Прозрачные цены
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Пакеты <span className="text-primary">услуг</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Выберите подходящий формат работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative group flex flex-col ${
                tier.highlighted
                  ? "border-primary shadow-2xl scale-[1.02] bg-gradient-to-b from-background to-primary/5"
                  : "hover:border-primary/50 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                  {tier.badge}
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-1">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-black">{tier.price}</span>
                  <span className="text-lg font-normal text-muted-foreground"> ₽{tier.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.highlighted ? "default" : "outline"}
                  className={`w-full ${tier.highlighted ? "shadow-lg shadow-primary/20" : ""}`}
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}