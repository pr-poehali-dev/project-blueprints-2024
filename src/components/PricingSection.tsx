import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { QuoteFormDialog } from "@/components/QuoteFormDialog"
import Icon from "@/components/ui/icon"

const pricingTiers = [
  {
    name: "Light",
    price: "50 000",
    discount: null,
    period: "/ мес",
    badge: null,
    subtitle: "Для компаний, которые хотят качественный старт",
    features: [
      "Контент-план на месяц",
      "12 Reels на iPhone 12",
      "10 постов",
      "Профессиональный монтаж",
      "Ежемесячный отчёт",
    ],
    highlighted: false,
  },
  {
    name: "Optimum",
    price: "140 000",
    discount: "110 000",
    period: "/ мес",
    badge: "Популярный",
    subtitle: "Системный рост с командой профессионалов",
    features: [
      "Продюсер + SMM + мобилограф",
      "12 Reels на iPhone + 4 поста",
      "Сценарии и монтаж",
      "SEO-копирайтинг и обложки",
      "45 Stories в месяц",
      "Кросспостинг (VK, Telegram, Instagram)",
      "Ежемесячная стратегия и отчёт",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "200 000",
    discount: "150 000",
    period: "/ мес",
    badge: "Топ",
    subtitle: "Для лидеров рынка и максимальной заметности",
    features: [
      "Всё из Optimum",
      "12 Reels на проф-камеру с постановкой",
      "Кросспостинг на YouTube, Дзен, TikTok",
      "Коллаборации с блогерами",
      "Розыгрыши и спецпроекты",
      "Кастинг актёров и подбор локаций",
      "Реквизит и имиджевая продакшн",
    ],
    highlighted: false,
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
            При подписке на 3 месяца — специальная цена на тарифы Optimum и Premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative group flex flex-col ${
                tier.highlighted
                  ? "border-primary shadow-2xl scale-105 bg-gradient-to-b from-background to-primary/5"
                  : "hover:border-primary/50 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {tier.badge}
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-1">{tier.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                <div className="mt-4 space-y-1">
                  {tier.discount && (
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm text-muted-foreground line-through">{tier.price} ₽</span>
                      <span className="text-xs bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded-full font-semibold">−3 мес</span>
                    </div>
                  )}
                  <div>
                    <span className="text-4xl font-black">
                      {tier.discount ? tier.discount : tier.price}
                    </span>
                    <span className="text-lg font-normal text-muted-foreground"> ₽{tier.period}</span>
                  </div>
                  {!tier.discount && (
                    <p className="text-xs text-muted-foreground">фиксированная цена</p>
                  )}
                  {tier.discount && (
                    <p className="text-xs text-muted-foreground">{tier.price} ₽ при ежемесячной оплате</p>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 group/item">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <QuoteFormDialog
                  packageName={tier.name}
                  variant={tier.highlighted ? "default" : "outline"}
                  className={`w-full ${tier.highlighted ? "shadow-lg shadow-primary/20" : ""}`}
                >
                  Выбрать тариф
                </QuoteFormDialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-muted/40 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Shield" fallback="Star" className="h-4 w-4 text-primary" />
              <span>Бесплатный аудит перед стартом</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="RefreshCw" fallback="Star" className="h-4 w-4 text-primary" />
              <span>Ежемесячная актуализация стратегии</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MessageCircle" fallback="Star" className="h-4 w-4 text-primary" />
              <span>Персональный менеджер проекта</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
