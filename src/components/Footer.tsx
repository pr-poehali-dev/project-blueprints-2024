import { Logo } from "@/components/Logo"

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b-2 border-foreground">
          <div>
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-xs">
              Креативное агентство SMM и Reels-контента. Делаем ваш бренд заметным в соцсетях.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono-tag text-xs uppercase tracking-wide">
            <a href="#team" className="hover:bg-accent hover:text-accent-foreground px-1 transition-colors">Команда</a>
            <a href="#services" className="hover:bg-accent hover:text-accent-foreground px-1 transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:bg-accent hover:text-accent-foreground px-1 transition-colors">Кейсы</a>
            <a href="#pricing" className="hover:bg-accent hover:text-accent-foreground px-1 transition-colors">Тарифы</a>
            <a href="#contact" className="hover:bg-accent hover:text-accent-foreground px-1 transition-colors">Контакты</a>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 font-mono-tag text-xs uppercase tracking-wide text-muted-foreground">
          <p>© 2026 TT MEDIA 48. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="https://t.me/tanshinatati" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Telegram
            </a>
            <a href="tel:89202424921" className="hover:text-foreground transition-colors">
              8-920-242-49-21
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
