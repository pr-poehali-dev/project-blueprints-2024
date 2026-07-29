import { Phone, Mail, Send, MessageSquare } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
          Контакты
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-balance">
          Готовы <span className="text-primary">начать?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a
            href="https://t.me/tanshinatati"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl border-2 bg-primary text-primary-foreground border-primary hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="p-3 rounded-xl bg-white/20 flex-shrink-0">
              <Send className="h-5 w-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-base text-white">Написать в Telegram</p>
              <p className="text-sm text-white/70">@tanshinatati</p>
            </div>
          </a>

          <a
            href="tel:89202424921"
            className="flex items-center gap-4 p-5 rounded-2xl border-2 bg-background border-border hover:border-primary transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-bold text-base">Позвонить</p>
              <p className="text-sm text-muted-foreground">8-920-242-49-21</p>
            </div>
          </a>

          <a
            href="https://max.ru/u/f9LHodD0cOJ8qj86uLmsoip6PXJ8appEgljI0Nzv4mM1726-7mxqsyR_blw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-2xl border-2 bg-background border-border hover:border-primary transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-bold text-base">Написать в MAX</p>
              <p className="text-sm text-muted-foreground">Мессенджер MAX</p>
            </div>
          </a>

          <a
            href="mailto:tanshina97@mail.ru"
            className="flex items-center gap-4 p-5 rounded-2xl border-2 bg-background border-border hover:border-primary transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-bold text-base">Написать на почту</p>
              <p className="text-sm text-muted-foreground">tanshina97@mail.ru</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}