import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Globe",
    title: "Онлайн-проекты под ключ",
    description:
      "Создаём и запускаем полноценное онлайн-присутствие: от стратегии до первых результатов. Вы получаете готовую систему, которая работает на ваш рост.",
  },
  {
    icon: "Briefcase",
    title: "Упаковка корпоративных профилей",
    description:
      "Оформляем и оптимизируем профили компании в соцсетях: визуал, описания, highlights, шаблоны. Профиль становится вашей лучшей визитной карточкой.",
  },
  {
    icon: "ShoppingBag",
    title: "Контент, который продаёт",
    description:
      "Создаём Reels, посты и сторис с продающими сценариями. Контент укрепляет экспертный статус и превращает подписчиков в клиентов.",
  },
  {
    icon: "BarChart2",
    title: "Анализ метрик и рост ROI",
    description:
      "Ежемесячная аналитика, отчёты и актуализация стратегии. Постоянно улучшаем показатели, чтобы каждый рубль инвестиций давал максимум.",
  },
  {
    icon: "PlusCircle",
    title: "Запуск новых соцсетей и блогов",
    description:
      "Запускаем новые площадки с нуля: разрабатываем концепцию, упаковываем профиль, создаём контент и набираем аудиторию системно.",
  },
  {
    icon: "Users",
    title: "Коллаборации и кросс-промо",
    description:
      "Организуем партнёрские коллаборации с блогерами, кросс-промо и рекламные стратегии. Эксклюзивные бонусы Premium: кастинг актёров, подбор локаций и реквизита.",
  },
]

const whyUs = [
  { icon: "LayoutDashboard", text: "Системный подход" },
  { icon: "Users", text: "Команда профессионалов" },
  { icon: "Layers", text: "Многоформатный контент" },
  { icon: "Target", text: "Фокус на результат" },
  { icon: "Star", text: "Эксклюзивные бонусы Premium" },
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
          В чём мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Комплексный подход: от стратегии и упаковки до производства контента и аналитики результатов.
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

        <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/10">
          <h3 className="text-2xl font-bold text-center mb-8">
            5 причин, почему выбирают <span className="text-primary">TT MEDIA</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name={item.icon} fallback="Star" className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
