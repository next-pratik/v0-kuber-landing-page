"use client"
import { Header } from "@/components/sections/header"
import HeroSection from "@/components/sections/hero"
import FeaturesSection from "@/components/sections/features"
import InsightsSection from "@/components/sections/insights"
import GamificationSection from "@/components/sections/gamification"
import BudgetPlanningSection from "@/components/sections/budget-planning"
import TestimonialsSection from "@/components/sections/testimonials"
import AIAssistantSection from "@/components/sections/ai-assistant"
import CTASection from "@/components/sections/cta"
import Footer from "@/components/sections/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { FloatingParticles } from "@/components/floating-particles"

export default function Home() {
  return (
    <>
      <FloatingParticles />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-background via-background to-background overflow-hidden pt-20">
        <HeroSection />
        <FeaturesSection />
        <InsightsSection />
        <GamificationSection />
        <BudgetPlanningSection />
        <TestimonialsSection />
        <AIAssistantSection />
        <CTASection />
        <Footer />
      </main>
      <StickyCTA />
    </>
  )
}
