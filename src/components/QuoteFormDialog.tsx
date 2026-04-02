import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const SEND_EMAIL_URL = "https://functions.poehali.dev/795f398d-59c2-41b7-a245-ceca93258500"

interface QuoteFormDialogProps {
  packageName?: string
  variant?: "default" | "outline"
  className?: string
  children?: React.ReactNode
}

export function QuoteFormDialog({ packageName, variant = "default", className, children }: QuoteFormDialogProps) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    package: packageName || "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(SEND_EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Ошибка отправки")
      setStatus("success")
      setTimeout(() => {
        setOpen(false)
        setStatus("idle")
        setFormData({ name: "", email: "", phone: "", company: "", package: packageName || "", message: "" })
      }, 2000)
    } catch {
      setStatus("error")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {children || "Запросить расчет"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Оставить заявку</DialogTitle>
          <DialogDescription>
            Заполните форму, и мы свяжемся с вами в ближайшее время для бесплатной консультации.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="py-10 text-center space-y-3">
            <div className="text-5xl">✅</div>
            <p className="text-lg font-bold">Заявка отправлена!</p>
            <p className="text-muted-foreground text-sm">Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ваше полное имя"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.ru"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+7 900 123-45-67"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Компания (необязательно)</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Название компании"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="package">Тариф</Label>
              <Select
                value={formData.package}
                onValueChange={(value) => setFormData({ ...formData, package: value })}
              >
                <SelectTrigger id="package">
                  <SelectValue placeholder="Выберите тариф" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Стартовый">Стартовый — 50 000 ₽/мес</SelectItem>
                  <SelectItem value="Активный рост">Активный рост — 140 000 ₽/мес</SelectItem>
                  <SelectItem value="VIP Продвижение">VIP Продвижение — 200 000 ₽/мес</SelectItem>
                  <SelectItem value="Ещё не определился">Ещё не определился</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Расскажите о вашем бизнесе и задачах..."
                rows={4}
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-destructive">Ошибка отправки. Напишите нам напрямую: tanshina97@mail.ru</p>
            )}

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
                Отмена
              </Button>
              <Button type="submit" className="flex-1" disabled={status === "loading"}>
                {status === "loading" ? "Отправляем..." : "Отправить заявку"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
