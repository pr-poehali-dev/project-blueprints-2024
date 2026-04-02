import { useState } from "react"
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"
import Icon from "@/components/ui/icon"

type SlideType = "case" | "services"

interface Case {
  type: "case"
  title: string
  image: string
  result: string
  stats: string[]
}

interface ServicesSlide {
  type: "services"
}

const services = [
  {
    icon: "LayoutGrid",
    title: "SMM «под ключ»",
    desc: "Анализ конкурентов, разработка стратегии, создание постов, регулярные сторис и кросспостинг во все соцсети.",
  },
  {
    icon: "Play",
    title: "Съёмка коротких видео",
    desc: "Сценарии, съёмка Reels (на iPhone или проф. камеру), сложный монтаж с нейросетями и кликабельные обложки.",
  },
  {
    icon: "Video",
    title: "Продюсирование",
    desc: "Организация съёмок от идеи до готового ролика. С вами работает целая команда: продюсер, SMM-менеджер и оператор.",
  },
  {
    icon: "Megaphone",
    title: "PR и розыгрыши",
    desc: "Организация масштабных партнёрских интерактивов, публикации в СМИ и приглашение на ТВ («Липецкое время»).",
  },
  {
    icon: "Bot",
    title: "Разработка чат-ботов",
    desc: "Создание умных ботов для автоматизации продаж и общения с клиентами в ваших соцсетях.",
  },
]

const slides: (Case | ServicesSlide)[] = [
  {
    type: "case",
    title: "Донской пар",
    image: "https://cdn.poehali.dev/projects/349aafd5-d8de-47c6-b2dd-fe211761eba0/bucket/ae109b9a-b1ce-4384-8aa0-7ad07697cf3b.png",
    result: "1M просмотров",
    stats: ["С 0 до 1000 подписчиков за 2 месяца", "1 000 000 просмотров за 2 месяца", "719 комментариев и 1920 сохранений"],
  },
  {
    type: "case",
    title: "Владимир Сургай",
    image: "https://cdn.poehali.dev/projects/349aafd5-d8de-47c6-b2dd-fe211761eba0/bucket/0f05aaf2-e0f7-4ee0-9f83-fadcf39f0945.jpg",
    result: "292K просмотров",
    stats: ["292 тысячи просмотров за месяц", "240 подписчиков за месяц"],
  },
  {
    type: "case",
    title: "АГРОштурман",
    image: "https://cdn.poehali.dev/projects/349aafd5-d8de-47c6-b2dd-fe211761eba0/bucket/cdeeece9-b68d-4da2-ab7d-2d6338d62dfd.jpg",
    result: "2,4M просмотров",
    stats: ["932 тыс. просмотров на одном Shorts", "2,4 млн просмотров", "+ 3000 подписчиков"],
  },
  {
    type: "services",
  },
]

export function PortfolioSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)
  const next = () => setCurrent((c) => (c + 1) % slides.length)

  const slide = slides[current]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Наши кейсы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные результаты для реальных брендов. Цифры говорят сами за себя.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[520px]">

          {slide.type === "case" ? (
            <>
              {/* Вертикальное фото кейса */}
              <div className="relative w-full md:w-[280px] flex-shrink-0">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: "9/16" }}>
                  <img
                    key={current}
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                    <TrendingUp className="h-3.5 w-3.5" />
                    {slide.result}
                  </div>
                  <div className="absolute bottom-5 left-5">
                    <h3 className="text-2xl font-black text-white">{slide.title}</h3>
                  </div>
                </div>
              </div>

              {/* Правая часть — статы */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="space-y-4">
                  {slide.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <p className="font-semibold text-base">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            /* Слайд с услугами */
            <div className="flex-1 w-full">
              <h3 className="text-2xl font-bold mb-6 text-center md:text-left">
                Наши <span className="text-primary">услуги</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className={`p-5 rounded-2xl bg-muted/50 border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group ${i === 4 ? "sm:col-span-2" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <Icon name={s.icon} fallback="Star" className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1 group-hover:text-primary transition-colors">{s.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Навигация */}
        <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>

          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>

          <span className="text-sm text-muted-foreground ml-2">
            {current + 1} / {slides.length}
          </span>
        </div>
      </div>
    </section>
  )
}
