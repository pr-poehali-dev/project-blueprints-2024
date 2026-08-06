import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Icon from "@/components/ui/icon"
import olgaImage from "@/assets/portfolio/olga-putilina.jpg"
import biorseImage from "@/assets/portfolio/biorise.jpg"
import donskoyImage from "@/assets/portfolio/donskoy-par.jpg"
import priestImage from "@/assets/portfolio/priest.jpg"
import massageImage from "@/assets/portfolio/massage.jpg"
import avtorskiiImage from "@/assets/portfolio/avtorskii-zhk.jpg"
import angelaImage from "@/assets/portfolio/angela-merkulova.jpg"

const cases = [
  {
    title: "Ольга Путилина",
    subtitle: "Здоровье. Детский остеопат",
    image: olgaImage,
    instagram: "https://www.instagram.com/dr.olga_putilina/",
    videos: [
      "https://rutube.ru/shorts/376ee44caea82478be5e7f5fe29fa445/",
      "https://rutube.ru/video/private/7f431f98b9bc28b94e265bc3bc1859d5/?p=7dWQm5gl-F1ILoTltnja4A",
    ],
    stats: [
      "270 000+ просмотров на самом вирусном рилсе",
      "20 000+ репостов",
    ],
  },
  {
    title: "BIORISE",
    subtitle: "Клиника превентивной и интегративной медицины",
    image: biorseImage,
    instagram: "https://www.instagram.com/biorise_lipetsk",
    videos: [
      "https://rutube.ru/shorts/b0ae9ee6a009582688b497a4f2e0d7d2/",
      "https://rutube.ru/shorts/05b4d7013e9e13266c44400af5f6c468/",
    ],
    stats: [
      "500 000+ просмотров на самом вирусном рилсе",
      "35 000+ репостов",
    ],
  },
  {
    title: "ЖК «Авторский»",
    subtitle: "Застройщик. Жилой комплекс бизнес-класса",
    image: avtorskiiImage,
    instagram: "https://www.instagram.com/avtorskii48/",
    videos: [
      "https://rutube.ru/shorts/c37b54d3879c02a77963262da32fba0c/",
      "https://rutube.ru/shorts/cd163b034744998b56dd5d543f2906d7/",
      "https://rutube.ru/shorts/e0158cb1c3ebc9b4730959588e25eaa1/",
    ],
    stats: [
      "35 000+ просмотров на самом вирусном рилсе",
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
  {
    title: "Анжелика Меркулова",
    subtitle: "Психолог",
    image: angelaImage,
    instagram: "https://www.instagram.com/_merkulovaangela_/",
    videos: [
      "https://rutube.ru/shorts/c520a9b26f1de9985e288c650356886a/",
      "https://rutube.ru/shorts/d8602fd7b111d3246fe2afebc1f679dc/",
      "https://rutube.ru/shorts/2aa42cccc90b6658b4531a77eb4c29f3/",
    ],
    stats: [
      "75 000+ просмотров на одном ролике",
    ],
  },
]

export function PortfolioSection() {
  const [current, setCurrent] = useState(0)
  const project = cases[current]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-8 border-b-2 border-foreground pb-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            Наши клиенты
          </h2>
          <span className="font-mono-tag text-xs uppercase tracking-wide text-muted-foreground hidden sm:block">
            {String(current + 1).padStart(2, "0")} / {String(cases.length).padStart(2, "0")}
          </span>
        </div>

        {/* Список-переключатель */}
        <div className="flex flex-wrap border-2 border-foreground border-b-0 mb-0">
          {cases.map((c, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`px-4 py-3 text-sm font-bold font-mono-tag uppercase tracking-wide border-r-2 border-foreground last:border-r-0 transition-colors ${
                i === current ? "bg-foreground text-background" : "hover:bg-accent"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="border-2 border-foreground grid grid-cols-1 md:grid-cols-[240px_1fr] md:h-[420px]">
          {/* Фото профиля */}
          <div className="relative border-b-2 md:border-b-0 md:border-r-2 border-foreground overflow-hidden bg-muted h-[420px] md:h-full">
            <img
              key={current}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {project.instagram && (
              <a
                href={project.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 py-3 bg-background border-t-2 border-foreground font-bold text-sm hover:bg-accent transition-colors"
              >
                <Icon name="Instagram" className="h-4 w-4" />
                Аккаунт
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Инфо + видео рядом */}
          <div className="p-6 sm:p-7 grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-6 md:h-full md:overflow-hidden">
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-3xl font-bold leading-tight">{project.title}</h3>
                <p className="text-sm font-mono-tag text-muted-foreground mt-1 uppercase tracking-wide">{project.subtitle}</p>
              </div>

              {project.stats.length > 0 && (
              <div className="grid gap-0 border-2 border-foreground">
                {project.stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 p-3 ${i !== project.stats.length - 1 ? "border-b-2 border-foreground" : ""}`}
                  >
                    <span className="font-mono-tag text-xs px-1.5 py-0.5 bg-accent text-accent-foreground flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-semibold text-sm">{stat}</p>
                  </div>
                ))}
              </div>
              )}
            </div>

            {/* Ссылки на примеры роликов */}
            {project.videos.length > 0 && (
              <div className="flex flex-col gap-2">
                <p className="font-mono-tag text-xs uppercase tracking-wide text-muted-foreground">
                  Примеры роликов
                </p>
                <div className="flex flex-col gap-2">
                  {project.videos.map((video, i) => (
                    <a
                      key={i}
                      href={video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 border-2 border-foreground hover:bg-accent transition-colors text-sm font-bold"
                    >
                      <Icon name="Play" className="h-4 w-4" />
                      Ролик {i + 1}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}