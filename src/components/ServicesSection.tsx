import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Play",
    title: "Reels-производство",
    description:
      "Снимаем и монтируем Reels под ключ: сценарий, съёмка, монтаж, субтитры и обложки. Создаём ролики, которые набирают просмотры и привлекают новую аудиторию.",
  },
  {
    icon: "LayoutGrid",
    title: "Ведение соцсетей",
    description:
      "Полное ведение Instagram, ВКонтакте и Telegram: контент-план, публикации, сторис, общение с аудиторией. Ваши соцсети живут и растут без вашего участия.",
  },
  {
    icon: "TrendingUp",
    title: "SMM-стратегия",
    description:
      "Разрабатываем стратегию присутствия бренда в соцсетях: позиционирование, рубрики, tone of voice и воронку от подписчика до клиента.",
  },
  {
    icon: "Target",
    title: "Таргетированная реклама",
    description:
      "Запускаем рекламу в Instagram и ВКонтакте: настройка аудиторий, создание креативов, тестирование связок и оптимизация для максимального ROI.",
  },
  {
    icon: "BarChart2",
    title: "Аналитика и отчётность",
    description:
      "Еженедельные и ежемесячные отчёты: охваты, вовлечённость, рост подписчиков, стоимость лида. Прозрачно показываем, что работает, а что нужно улучшить.",
  },
  {
    icon: "Sparkles",
    title: "Брендинг для соцсетей",
    description:
      "Создаём визуальный стиль для соцсетей: шаблоны сторис, обложки Reels, единую цветовую схему. Ваш профиль выглядит профессионально и запоминается.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          От одного Reels до полного контент-сопровождения — мы закрываем все задачи по продвижению в социальных сетях.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} fallback="Star" className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
