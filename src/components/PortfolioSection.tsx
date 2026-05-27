import { useState } from "react"
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"

const cases = [
  {
    title: "Донской пар",
    subtitle: "Строительство домов и бань",
    description: "Выстроили систему генерации лидов на высокие чеки через органику Reels. Сделали ставку на микс: вирусный юмор для массового охвата и жесткий экспертный контент для прогрева и закрытия возражений.",
    image: "https://cdn.poehali.dev/projects/349aafd5-d8de-47c6-b2dd-fe211761eba0/bucket/e2f7386f-2718-432d-86ce-c63c7cc38f0f.PNG",
    result: "1,1M просмотров",
    stats: [
      "1,1 млн просмотров на топовом Reels",
      "174 тыс. просмотров на экспертном контенте",
      "Стабильный поток горячих лидов",
    ],
  },
  {
    title: "Владимир Сургай",
    subtitle: "Личный бренд эксперта",
    description: "Упаковали экспертность в короткий контент, который работает на привлечение аудитории и формирование доверия. Результат — органический рост без рекламного бюджета.",
    image: "https://cdn.poehali.dev/projects/349aafd5-d8de-47c6-b2dd-fe211761eba0/bucket/0f05aaf2-e0f7-4ee0-9f83-fadcf39f0945.jpg",
    result: "292K просмотров",
    stats: [
      "292 тысячи просмотров за месяц",
      "240 новых подписчиков за месяц",
      "Рост вовлечённости аудитории",
    ],
  },
  {
    title: "Детский остеопат",
    subtitle: "Медицинская экспертиза",
    description: "Создали экспертный аккаунт с нуля для детского остеопата. Каждый Reels — полезный контент, который набирает охваты и приводит родителей на приём.",
    image: "https://cdn.poehali.dev/files/345f5f33-9348-4fc4-86ed-d083f1dc75e8.PNG",
    result: "210K просмотров",
    stats: [
      "210 тыс. просмотров на одном Reels",
      "С нуля до живого экспертного аккаунта",
      "Стабильный охват на каждом видео",
    ],
  },
  {
    title: "АГРОштурман",
    subtitle: "Агробизнес / YouTube Shorts",
    description: "Запустили канал с нуля и вывели видео в топ рекомендаций. Один Shorts набрал почти миллион просмотров и дал взрывной прирост аудитории.",
    image: "https://cdn.poehali.dev/projects/349aafd5-d8de-47c6-b2dd-fe211761eba0/bucket/cdeeece9-b68d-4da2-ab7d-2d6338d62dfd.jpg",
    result: "2,4M просмотров",
    stats: [
      "932 тыс. просмотров на одном Shorts",
      "2,4 млн просмотров суммарно",
      "+3000 подписчиков",
    ],
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

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Левая часть — фото */}
          <div className="relative w-full md:w-[260px] flex-shrink-0">
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
            </div>
          </div>

          {/* Правая часть */}
          <div className="flex-1 flex flex-col gap-5 pt-2">
            {/* Текстовый блок */}
            <div>
              <h3 className="text-3xl font-black leading-tight">{project.title}</h3>
              <p className="text-primary font-semibold text-base mt-1">{project.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-3">{project.description}</p>
            </div>

            {/* Плашки со статистикой */}
            <div className="space-y-3 mt-1">
              {project.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="font-semibold text-base">{stat}</p>
                </div>
              ))}
            </div>
          </div>
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
