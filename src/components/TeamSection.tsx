const team = [
  {
    index: "01",
    name: "Таньшина Татьяна",
    role: "Основатель, маркетолог и телеведущая",
    bio: "Действующая телеведущая канала «Липецкое время» и автор программы «Свое мнение». Татьяна на практике знает, как удерживать внимание зрителя и превращать сухую информацию в контент, который обсуждают.",
    image: "https://cdn.poehali.dev/files/35356dc8-fb3c-4ec9-9a14-0e84f35a9912.png",
  },
  {
    index: "02",
    name: "Евгений Володин",
    role: "PR-менеджер · Контент-маркетолог · Продюсер",
    bio: "Больше 5 лет в PR и контент-продюсировании. Прошел путь от пресс-секретаря МЧС до создания комплексных стратегий для бизнеса и экспертов.",
    image: "https://cdn.poehali.dev/files/07fc9a1c-9678-4bda-bcc4-3de0fe1e4cb9.jpeg",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-12 border-b-2 border-foreground pb-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            Команда
          </h2>
          <span className="font-mono-tag text-xs uppercase tracking-wide text-muted-foreground hidden sm:block">
            Люди, которые делают результат
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {team.map((member, i) => (
            <div
              key={i}
              className={`group border-2 border-foreground ${i === 0 ? "md:border-r-0" : ""} p-0 flex flex-col`}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <span className="absolute top-4 left-4 font-mono-tag text-xs px-2 py-1 bg-background border border-foreground">
                  {member.index}
                </span>
              </div>
              <div className="p-6 border-t-2 border-foreground">
                <h3 className="text-2xl font-bold leading-tight">{member.name}</h3>
                <p className="text-sm font-mono-tag text-muted-foreground mt-1 mb-4 uppercase tracking-wide">{member.role}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
