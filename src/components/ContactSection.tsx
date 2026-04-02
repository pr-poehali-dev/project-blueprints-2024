import { Phone, Mail, Send, MessageSquare } from "lucide-react"

const contactActions = [
  {
    label: "Написать в Telegram",
    href: "https://t.me/tanshinatati",
    icon: Send,
    description: "@tanshinatati",
    primary: true,
  },
  {
    label: "Позвонить",
    href: "tel:89202424921",
    icon: Phone,
    description: "8-920-242-49-21",
    primary: false,
  },
  {
    label: "Написать в MAX",
    href: "https://max.ru/tanshinatati",
    icon: MessageSquare,
    description: "Мессенджер MAX",
    primary: false,
  },
  {
    label: "Написать на почту",
    href: "mailto:tanshina97@mail.ru",
    icon: Mail,
    description: "tanshina97@mail.ru",
    primary: false,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
          Контакты
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
          Готовы <span className="text-primary">вырасти в соцсетях?</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Проведём бесплатный аудит ваших соцсетей и расскажем, как быстро увеличить охваты и привлечь клиентов.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contactActions.map((action, i) => {
            const Icon = action.icon
            return (
              <a
                key={i}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl ${
                  action.primary
                    ? "bg-primary text-primary-foreground border-primary hover:bg-primary/90"
                    : "bg-background border-border hover:border-primary"
                }`}
              >
                <div className={`p-3 rounded-xl flex-shrink-0 transition-colors ${
                  action.primary
                    ? "bg-white/20"
                    : "bg-primary/10 group-hover:bg-primary/20"
                }`}>
                  <Icon className={`h-5 w-5 ${action.primary ? "text-white" : "text-primary"}`} />
                </div>
                <div className="text-left">
                  <p className={`font-bold text-base ${action.primary ? "text-white" : ""}`}>{action.label}</p>
                  <p className={`text-sm ${action.primary ? "text-white/70" : "text-muted-foreground"}`}>{action.description}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
