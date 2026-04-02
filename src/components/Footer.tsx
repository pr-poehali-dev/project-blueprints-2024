export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-xl font-black tracking-tighter text-primary">TT</span>
              <span className="text-xl font-black tracking-tighter">MEDIA</span>
              <span className="text-base font-black text-muted-foreground ml-1">48</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Креативное агентство SMM и Reels-контента. Делаем ваш бренд заметным в соцсетях.
            </p>
            <p className="text-xs text-muted-foreground mt-4">© 2026 TT MEDIA. Все права защищены.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Портфолио
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a
                href="https://t.me/tanshinatati"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Telegram
              </a>
              <a
                href="tel:89202424921"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                8-920-242-49-21
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}