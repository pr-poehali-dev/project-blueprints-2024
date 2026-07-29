import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "#team", label: "Команда" },
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Клиенты" },
    { href: "#pricing", label: "Тарифы" },
    { href: "#contact", label: "Контакты" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px] border-l-2 border-foreground">
        <SheetHeader>
          <SheetTitle className="font-mono-tag uppercase text-sm tracking-wide">Навигация</SheetTitle>
          <SheetDescription>Переход к разделам сайта</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-8">
          {menuItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 text-lg font-bold hover:text-accent-foreground hover:bg-accent transition-all py-3 px-3 border-b border-border last:border-b-0"
            >
              <span className="font-mono-tag text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}