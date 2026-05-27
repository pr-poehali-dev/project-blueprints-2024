import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { TeamSection } from "@/components/TeamSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { PricingSection } from "@/components/PricingSection"
import { AuditSection } from "@/components/AuditSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TeamSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <AuditSection />
      <ContactSection />
      <Footer />
    </main>
  )
}