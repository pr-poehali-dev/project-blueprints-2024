import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

const projects = [
  {
    title: "Фитнес-студия FitLife",
    category: "Reels + SMM-ведение",
    image: "/placeholder.jpg",
    description:
      "За 3 месяца вырастили аккаунт с 1 200 до 18 000 подписчиков. Серия Reels о тренировках набрала 2,4 млн просмотров. Рост заявок на абонементы +320%.",
    tags: ["Reels", "Instagram", "Контент-план", "Таргет"],
    result: "+1500% охватов",
  },
  {
    title: "Ресторан «Восток»",
    category: "Reels-производство",
    image: "/placeholder.jpg",
    description:
      "Создали 40 Reels за 2 месяца: рецепты, атмосфера кухни, закулисье. Один ролик набрал 800 тыс. просмотров и привёл 200+ новых гостей за неделю.",
    tags: ["Reels", "Сторис", "ВКонтакте", "TikTok"],
    result: "800K просмотров",
  },
  {
    title: "Салон красоты Glam",
    category: "SMM-стратегия + таргет",
    image: "/placeholder.jpg",
    description:
      "Разработали стратегию продвижения, запустили таргет и ведение. За 4 месяца: 12 000 новых подписчиков, стоимость заявки снижена с 890 до 210 рублей.",
    tags: ["SMM", "Таргет", "Instagram", "Брендинг"],
    result: "Лид за 210 ₽",
  },
  {
    title: "Онлайн-школа English+",
    category: "Контент + воронка продаж",
    image: "/placeholder.jpg",
    description:
      "Построили воронку через Reels и сторис: от холодной аудитории до покупки курса. Конверсия из подписчика в ученика выросла в 4 раза за 6 месяцев.",
    tags: ["Воронка", "Reels", "Telegram", "Email"],
    result: "×4 конверсия",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши кейсы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Реальные результаты для реальных брендов. Цифры говорят сами за себя.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {project.result}
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
