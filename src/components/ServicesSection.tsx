import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "LayoutGrid",
    title: "SMM под ключ",
    desc: "Берем на себя ведение соцсетей. Делаем то, что реально работает на продажи, а не просто пишем посты ради галочки.",
    points: [
      "Аудит площадок и анализ конкурентов",
      "Создание визуала и оформление профиля",
      "Регулярный постинг: тексты, Stories, Reels",
      "Модерация комментариев и сообщений в Direct",
      "Аналитика и корректировка плана каждый месяц",
    ],
  },
  {
    icon: "Film",
    title: "Продюсирование и режиссирование",
    desc: "Полностью забираем организацию съёмок. Вам не нужно искать студии, актёров и думать, как поставить кадр.",
    points: [
      "Разработка креативной концепции",
      "Поиск и бронирование локаций — от интерьерных студий до строящихся объектов",
      "Подбор команды и контроль тайминга",
      "Управление на площадке: ставим задачи и следим за результатом",
    ],
  },
  {
    icon: "Camera",
    title: "Операторская работа",
    desc: "Делаем чистую коммерческую картинку, которая показывает продукт лицом. Без любительской тряски.",
    points: [
      "Съёмка Reels, обзоров и имиджевых роликов",
      "Работа с профессиональным светом и оборудованием",
      "Поиск лучших ракурсов, будь то салон дверей или жилой комплекс",
    ],
  },
  {
    icon: "Scissors",
    title: "Монтаж роликов",
    desc: "Собираем видео так, чтобы его хотелось досмотреть.",
    points: [
      "Плотный монтаж без лишних пауз",
      "Цветокоррекция и саунд-дизайн",
      "Добавление субтитров, плашек и инфографики",
      "Использование нейросетей для сложной графики",
    ],
  },
  {
    icon: "Bot",
    title: "Автоворонки и чат-боты",
    desc: "Настраиваем системы, которые прогревают и продают без участия менеджера.",
    points: [
      "Разработка логики воронки под ваш бизнес",
      "Внедрение ботов в Direct для выдачи лид-магнитов и ответов на реакции",
      "Настройка цепочек сообщений, которые доводят клиента до покупки",
    ],
  },
  {
    icon: "Tv",
    title: "PR, коллаборации и СМИ",
    desc: "Делаем так, чтобы о вашем бренде говорили за пределами привычного SMM.",
    points: [
      "Организация партнёрских спецпроектов",
      "Подбор блогеров для рекламы и кросс-промо",
      'Публикации в прессе и вывод спикеров в медиа, включая "Липецкое время"',
    ],
  },
  {
    icon: "Factory",
    title: "Создание контент-завода",
    desc: "Помогаем выстроить производство контента внутри компании, если вы хотите снимать всё сами.",
    points: [
      "Обучение сотрудников основам съёмки и подачи",
      "Создание регламентов, гайдов и шаблонов для работы",
      "Превращение хаоса в понятный процесс — от идеи до публикации",
    ],
  },
  {
    icon: "PenTool",
    title: "Написание сценариев",
    desc: "Пишем сценарии для видео, которые цепляют с первых секунд и доносят нужные смыслы.",
    points: [
      "Разработка сильных хуков для удержания внимания",
      "Раскадровки и сторителлинг",
      "Адаптация сложной информации в понятный разговорный формат",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Что мы делаем
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Наши <span className="text-primary">услуги</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Создаем контент и выстраиваем автоворонки, которые превращают просмотры в заявки и продажи
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary hover:shadow-xl transition-all duration-300 group flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary transition-all duration-300 flex-shrink-0">
                  <Icon name={s.icon} fallback="Star" className="h-5 w-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-bold text-base leading-tight group-hover:text-primary transition-colors">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="space-y-1.5 mt-auto">
                {s.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
