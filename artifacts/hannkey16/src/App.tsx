import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyChooseSection } from '@/components/sections/WhyChooseSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';
import { FloatingButtons } from '@/components/sections/FloatingButtons';

const queryClient = new QueryClient();

function HomePage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <HomePage />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
