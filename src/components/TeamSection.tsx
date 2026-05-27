const team = [
  {
    name: "Таньшина Татьяна",
    role: "Основатель, маркетолог и телеведущая",
    bio: "Действующая телеведущая канала «Липецкое время» и автор программы «Свое мнение». Татьяна на практике знает, как удерживать внимание зрителя и превращать сухую информацию в контент, который обсуждают.",
    superpower: "Раскрывать людей в кадре и делать так, чтобы зритель поверил с первых секунд.",
    image: "https://cdn.poehali.dev/files/35356dc8-fb3c-4ec9-9a14-0e84f35a9912.png",
    gradient: "from-rose-950 via-slate-900 to-slate-900",
    accentColor: "bg-rose-500",
  },
  {
    name: "Евгений Володин",
    role: "Продюсер и контент-маркетолог",
    bio: "Прошел весь цикл видеопроизводства своими руками: работал оператором, монтировал, а сейчас продюсирует и режиссирует проекты.",
    superpower: "Работа со смыслами и триггерами. Я знаю, почему люди досмотрят ролик до последней секунды, и это происходит точно не из-за красивого монтажа.",
    image: "https://cdn.poehali.dev/files/07fc9a1c-9678-4bda-bcc4-3de0fe1e4cb9.jpeg",
    gradient: "from-slate-900 via-slate-800 to-slate-900",
    accentColor: "bg-purple-500",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Команда
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Люди, которые делают <span className="text-primary">результат</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${member.gradient} shadow-2xl group min-h-[520px] flex flex-col justify-end`}
            >
              {/* Фото */}
              <div className="absolute inset-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-70 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>

              {/* Контент */}
              <div className="relative z-10 p-7 space-y-4">
                {/* Имя и должность */}
                <div>
                  <h3 className="text-2xl font-black text-white leading-tight">{member.name}</h3>
                  <p className="text-white/60 text-sm font-medium mt-1">{member.role}</p>
                </div>

                {/* Описание */}
                <p className="text-white/80 text-sm leading-relaxed">{member.bio}</p>

                {/* Суперспособность */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className={`w-2 h-2 rounded-full ${member.accentColor} flex-shrink-0 mt-1.5`} />
                  <div>
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-1">Суперспособность</p>
                    <p className="text-white text-sm leading-relaxed">{member.superpower}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}