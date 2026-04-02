import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { QuoteFormDialog } from "@/components/QuoteFormDialog"
import Icon from "@/components/ui/icon"

const pricingTiers = [
  {
    name: "Стартовый",
    price: "50 000",
    discount: null,
    period: "/ мес",
    badge: null,
    subtitle: "Качественный старт для вашего бизнеса",
    features: [
      "Контент-план на месяц",
      "8 Reels на iPhone (с монтажом)",
      "4 поста в месяц",
      "Ежемесячная аналитика и отчётность",
      "Оптимизация контента под тренды",
      "Основные KPI и рекомендации",
    ],
    extras: [
      "Тематическая съёмка — по запросу",
      "+2 Reels за 10 000 ₽",
    ],
    highlighted: false,
  },
  {
    name: "Активный рост",
    price: "140 000",
    discount: "110 000",
    period: "/ мес",
    badge: "Популярный",
    subtitle: "Команда: продюсер, SMM-менеджер, мобилограф",
    features: [
      "Контент-план на месяц",
      "12 Reels + 7 постов (сценарии и монтаж)",
      "SEO-копирайтинг для постов",
      "45 Stories (интерактивы, голосования)",
      "Кросспостинг (VK, Telegram, Instagram)",
      "Ежемесячная отчётность и стратегия",
      "Анализ конкурентов и аудит соцсетей",
    ],
    extras: [
      "Работа с блогерами и инфлюенсерами",
      "Розыгрыши для роста вовлечённости",
      "Кастинг актёров и подбор локаций",
      "Подбор реквизита для съёмок",
      "Профессиональная фотосессия — по запросу",
      "Таргетинг и реклама — по запросу",
    ],
    highlighted: true,
  },
  {
    name: "VIP Продвижение",
    price: "200 000",
    discount: "150 000",
    period: "/ мес",
    badge: "Топ",
    subtitle: "Команда: продюсер, SMM-менеджер, видеограф",
    features: [
      "Контент-план на месяц",
      "12 Reels + 12 постов (проф. съёмка и монтаж)",
      "SEO-копирайтинг для всех материалов",
      "Обложки для Reels и постов",
      "45 Stories с интерактивными элементами",
      "Кросспостинг (VK, Telegram, Instagram)",
      "Ежемесячная отчётность и стратегия",
      "Анализ конкурентов и трендов",
    ],
    extras: [
      "Кастинг актёров для роликов",
      "Подбор локаций и реквизита",
      "Коллаборации с блогерами и розыгрыши",
      "Прямые эфиры, викторины, конкурсы",
      "YouTube / TikTok — мультиканальный подход",
      "Проф. видеосъёмка с монтажом — по запросу",
      "Запуск рекламных кампаний — по запросу",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  const [openExtras, setOpenExtras] = useState<number | null>(null)

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
            При подписке на 3 месяца — специальная цена на тарифы «Активный рост» и «VIP Продвижение»
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
                <p className="text-xs text-muted-foreground">{tier.subtitle}</p>
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
                  {tier.discount && (
                    <p className="text-xs text-muted-foreground">{tier.price} ₽ при ежемесячной оплате</p>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ul className="space-y-2.5 mb-4 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Дополнительные опции */}
                <div className="mb-4">
                  <button
                    onClick={() => setOpenExtras(openExtras === index ? null : index)}
                    className="flex items-center gap-1.5 text-xs text-primary font-semibold hover:opacity-80 transition-opacity"
                  >
                    {openExtras === index ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                    {openExtras === index ? "Скрыть бонусы" : "Показать бонусы и доп. опции"}
                  </button>
                  {openExtras === index && (
                    <ul className="mt-2 space-y-2 pl-1">
                      {tier.extras.map((extra, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1 flex-shrink-0">✦</span>
                          <span className="text-xs text-muted-foreground leading-relaxed">{extra}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

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
