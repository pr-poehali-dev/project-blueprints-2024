import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Icon from "@/components/ui/icon"
import olgaImage from "@/assets/portfolio/olga-putilina.jpg"
import biorseImage from "@/assets/portfolio/biorise.jpg"
import donskoyImage from "@/assets/portfolio/donskoy-par.jpg"
import priestImage from "@/assets/portfolio/priest.jpg"
import massageImage from "@/assets/portfolio/massage.jpg"

const cases = [
  {
    title: "Ольга Путилина",
    subtitle: "Здоровье. Детский остеопат",
    image: olgaImage,
    instagram: "https://www.instagram.com/dr.olga_putilina/",
    videos: ["https://rutube.ru/shorts/376ee44caea82478be5e7f5fe29fa445/"],
    stats: [
      "270 000+ просмотров на самом вирусном рилсе",
      "20 000+ репостов",
    ],
  },
  {
    title: "BIORISE",
    subtitle: "Бренд",
    image: biorseImage,
    instagram: null,
    videos: ["https://rutube.ru/shorts/b0ae9ee6a009582688b497a4f2e0d7d2/"],
    stats: [
      "500 000+ просмотров на самом вирусном рилсе",
      "35 000+ репостов",
    ],
  },
  {
    title: "Донской пар",
    subtitle: "Строительство домов и бань",
    image: donskoyImage,
    instagram: "https://www.instagram.com/donskoy_par",
    videos: [
      "https://rutube.ru/shorts/fd0edd196b670e7ae99c033aa265b894/",
      "https://rutube.ru/shorts/ebb13be1c6031fd45f7cde0a5aae3aed/",
      "https://rutube.ru/shorts/33a1c2f9542daa338093cc3889ac5f5f/",
    ],
    stats: [
      "1 млн+ просмотров на самом вирусном рилсе",
      "110+ заявок",
      "+1400 целевых подписчиков",
    ],
  },
  {
    title: "Отец Сергий",
    subtitle: "Личный бренд священника",
    image: priestImage,
    instagram: "https://www.instagram.com/byriakovsergiy?igsh=MWlnenZqdGFoOGRwMw==",
    videos: [
      "https://rutube.ru/shorts/617a3f081e6abe3bc7e19bfb9440ad93/",
      "https://rutube.ru/shorts/ffa9f08d6923dec40e9f09d991489304/",
      "https://rutube.ru/shorts/02732e9d612c1d4738f43147ac447624/",
    ],
    stats: [
      "3 рилса сняли",
      "230 000+ просмотров на самом вирусном рилсе",
      "35 000+ репостов",
    ],
  },
  {
    title: "Николай Соловьев",
    subtitle: "Здоровье. Массаж",
    image: massageImage,
    instagram: "https://www.instagram.com/kola.solovev/",
    videos: [
      "https://rutube.ru/shorts/c663b7c5d19c2f9be7b34dfd84b9c303/",
      "https://rutube.ru/shorts/8e8d3873fdbb96cf18a442a48e0520db/",
      "https://rutube.ru/shorts/85ccb4e27411e78454d41b2386c92c56/",
    ],
    stats: [
      "1,1 млн+ просмотров на самом вирусном рилсе",
      "25 000+ репостов",
      "5 снятых рилсов",
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
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Левая часть — фото профиля */}
          <div className="relative w-full md:w-[260px] flex-shrink-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ aspectRatio: "9/16" }}>
              <img
                key={current}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {project.instagram && (
              <a
                href={project.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
              >
                <Icon name="Instagram" className="h-4 w-4" />
                Смотреть аккаунт
              </a>
            )}
          </div>

          {/* Правая часть */}
          <div className="flex-1 flex flex-col gap-5 pt-2">
            <div>
              <h3 className="text-3xl font-black leading-tight">{project.title}</h3>
              <p className="text-primary font-semibold text-base mt-1">{project.subtitle}</p>
            </div>

            <div className="space-y-3 mt-1">
              {project.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="font-semibold text-base">{stat}</p>
                </div>
              ))}
            </div>

            {project.videos.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">Примеры роликов</p>
                <div className="flex flex-wrap gap-2">
                  {project.videos.map((video, i) => (
                    <a
                      key={i}
                      href={video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all text-sm font-medium group"
                    >
                      <Icon name="Play" className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                      Ролик {i + 1}
                    </a>
                  ))}
                </div>
              </div>
            )}
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