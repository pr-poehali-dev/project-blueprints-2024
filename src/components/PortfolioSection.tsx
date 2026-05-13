import { useState } from "react"
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"

const cases = [
  {
    title: "Донской пар",
    image: "https://cdn.poehali.dev/projects/349aafd5-d8de-47c6-b2dd-fe211761eba0/bucket/ae109b9a-b1ce-4384-8aa0-7ad07697cf3b.png",
    result: "1M просмотров",
    stats: ["С 0 до 1000 подписчиков за 2 месяца", "1 000 000 просмотров за 2 месяца", "719 комментариев и 1920 сохранений"],
  },
  {
    title: "Владимир Сургай",
    image: "https://cdn.poehali.dev/projects/349aafd5-d8de-47c6-b2dd-fe211761eba0/bucket/0f05aaf2-e0f7-4ee0-9f83-fadcf39f0945.jpg",
    result: "292K просмотров",
    stats: ["292 тысячи просмотров за месяц", "240 подписчиков за месяц"],
  },
  {
    title: "Детский остеопат",
    image: "https://cdn.poehali.dev/files/345f5f33-9348-4fc4-86ed-d083f1dc75e8.PNG",
    result: "210K просмотров",
    stats: ["210 тыс. просмотров на одном Reels", "С нуля до живого экспертного аккаунта", "Стабильный охват на каждом видео"],
  },
  {
    title: "АГРОштурман",
    image: "https://cdn.poehali.dev/projects/349aafd5-d8de-47c6-b2dd-fe211761eba0/bucket/cdeeece9-b68d-4da2-ab7d-2d6338d62dfd.jpg",
    result: "2,4M просмотров",
    stats: ["932 тыс. просмотров на одном Shorts", "2,4 млн просмотров", "+ 3000 подписчиков"],
  },
]

export function PortfolioSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + cases.length) % cases.length)
  const next = () => setCurrent((c) => (c + 1) % cases.length)

  const project = cases[current]

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
          <div className="relative w-full md:w-[280px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: "9/16" }}>
              <img
                key={current}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                <TrendingUp className="h-3.5 w-3.5" />
                {project.result}
              </div>
              <div className="absolute bottom-5 left-5">
                <h3 className="text-2xl font-black text-white">{project.title}</h3>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="space-y-4">
              {project.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="font-semibold text-base">{stat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>
          <div className="flex gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-2 bg-primary/30"}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>
          <span className="text-sm text-muted-foreground ml-2">{current + 1} / {cases.length}</span>
        </div>
      </div>
    </section>
  )
}