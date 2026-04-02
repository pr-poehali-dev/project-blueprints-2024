import { useState } from "react"
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Донской пар",
    category: "Reels-производство + SMM",
    image: "https://cdn.poehali.dev/projects/349aafd5-d8de-47c6-b2dd-fe211761eba0/bucket/ae109b9a-b1ce-4384-8aa0-7ad07697cf3b.png",
    result: "734K просмотров",
    stats: ["С 0 до 1000 подписчиков за 2 мес.", "1 000 000 просмотров за 2 мес.", "719 комментариев · 1920 сохранений"],
  },
  {
    title: "АГРОштурман",
    category: "Reels + YouTube Shorts",
    image: "https://cdn.poehali.dev/projects/349aafd5-d8de-47c6-b2dd-fe211761eba0/bucket/cdeeece9-b68d-4da2-ab7d-2d6338d62dfd.jpg",
    result: "932K просмотров",
    stats: ["932 тыс. просмотров на одном Shorts", "162 тыс. и 87 тыс. — топовые ролики", "Вирусный контент об агробизнесе"],
  },
]

export function PortfolioSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + projects.length) % projects.length)
  const next = () => setCurrent((c) => (c + 1) % projects.length)

  const project = projects[current]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Наши кейсы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Реальные результаты для реальных брендов. Цифры говорят сами за себя.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Вертикальное фото */}
          <div className="relative w-full md:w-[320px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: "9/16" }}>
              <img
                key={current}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition-opacity duration-500"
              />
              {/* Градиент снизу */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Бейдж результата */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                <TrendingUp className="h-3.5 w-3.5" />
                {project.result}
              </div>
              {/* Название внизу */}
              <div className="absolute bottom-5 left-5">
                <p className="text-xs text-white/70 font-medium mb-1">{project.category}</p>
                <h3 className="text-2xl font-black text-white">{project.title}</h3>
              </div>
            </div>
          </div>

          {/* Правая часть */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Статы */}
            <div className="space-y-4">
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="font-semibold text-base">{stat}</p>
                </div>
              ))}
            </div>

            {/* Навигация */}
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
              >
                <ChevronLeft className="h-5 w-5 text-primary" />
              </button>

              <div className="flex gap-2">
                {projects.map((_, i) => (
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
                {current + 1} / {projects.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
