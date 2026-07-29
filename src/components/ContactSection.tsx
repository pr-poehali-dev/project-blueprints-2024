import { Phone, Mail, Send, MessageSquare, ArrowUpRight } from "lucide-react"

const contacts = [
  {
    label: "Telegram",
    value: "@tanshinatati",
    href: "https://t.me/tanshinatati",
    icon: Send,
    external: true,
    filled: true,
  },
  {
    label: "Телефон",
    value: "8-920-242-49-21",
    href: "tel:89202424921",
    icon: Phone,
    external: false,
    filled: false,
  },
  {
    label: "MAX",
    value: "Мессенджер MAX",
    href: "https://max.ru/u/f9LHodD0cOJ8qj86uLmsoip6PXJ8appEgljI0Nzv4mM1726-7mxqsyR_blw",
    icon: MessageSquare,
    external: true,
    filled: false,
  },
  {
    label: "Почта",
    value: "tanshina97@mail.ru",
    href: "mailto:tanshina97@mail.ru",
    icon: Mail,
    external: false,
    filled: false,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="border-b-2 border-foreground pb-6 mb-0">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            Готовы <span className="bg-accent px-2">начать?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 border-2 border-t-0 border-foreground">
          {contacts.map((c, i) => {
            const Icon = c.icon
            return (
              <a
                key={i}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-between gap-4 p-6 border-foreground transition-colors ${
                  i % 2 === 0 ? "sm:border-r-2" : ""
                } ${i < contacts.length - (contacts.length % 2 === 0 ? 2 : 1) ? "border-b-2" : ""} ${
                  c.filled ? "bg-foreground text-background hover:bg-accent hover:text-accent-foreground" : "hover:bg-accent"
                }`}
              >
                <div className="flex items-center gap-4">
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-mono-tag text-[10px] uppercase tracking-wide opacity-60">{c.label}</p>
                    <p className="font-bold text-base">{c.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
