import dynamic from 'next/dynamic';

// Above-the-fold components (Static Import for SEO & LCP)
import Hero from '@/modules/homepage/Hero';
import TrustBar from '@/modules/homepage/TrustBar';
import ProblemSection from '@/modules/homepage/ProblemSection';
import AboutSection from '@/modules/homepage/AboutSection';
import SolutionSection from '@/modules/homepage/SolutionSection';
import StatsSection from '@/modules/homepage/StatsSection';
import ServicesShowcase from '@/modules/homepage/ServicesShowcase';
import ProcessSection from '@/modules/homepage/ProcessSection';
import ProofSection from '@/modules/homepage/ProofSection';
import TestimonialsSection from '@/modules/homepage/TestimonialsSection';
import FAQSection from '@/modules/homepage/FAQSection';
import WhyChooseUs from '@/modules/homepage/WhyChooseUs';
import RecentProjects from '@/modules/homepage/RecentProjects';
import Technologies from '@/modules/homepage/Technologies';

// Below-the-fold components (Dynamic Import for Performance)
const VideoTestimonials = dynamic(() => import('@/modules/homepage/VideoTestimonials'));
const Testimonials = dynamic(() => import('@/modules/homepage/Testimonials'));
const CaseStudies = dynamic(() => import('@/modules/homepage/CaseStudies'));
const TeamSection = dynamic(() => import('@/modules/homepage/TeamSection'));
const Certifications = dynamic(() => import('@/modules/homepage/Certifications'));
const PricingSection = dynamic(() => import('@/modules/homepage/PricingSection'));
// const FAQSection = dynamic(() => import('@/modules/homepage/FAQSection'));
const BlogSection = dynamic(() => import('@/modules/homepage/BlogSection'));
const ContactSection = dynamic(() => import('@/modules/homepage/ContactSection'));
const CTASection = dynamic(() => import('@/modules/homepage/CTASection'));

export const metadata = {
  title: 'Global Webify - Best Digital Marketing Agency in Ranchi | Web Development & SEO Services',
  description: 'Leading digital marketing agency in Ranchi offering web development, SEO, branding, mobile apps, and e-commerce solutions. 500+ projects delivered, 98% client satisfaction. Transform your business with enterprise-grade digital solutions.',
  keywords: 'digital marketing agency Ranchi, web development company Ranchi, SEO services India, branding agency, mobile app development, e-commerce solutions, best digital marketing agency India',
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero (5-8s) */}
      <Hero />

      {/* 2. Trust Bar (3-5s) */}
      <TrustBar />

      {/* 3. Problem Awareness (10-15s) */}
      <ProblemSection />

      {/* 4. About Us (20-30s) */}
      <AboutSection />

      {/* 5. Services Showcase (30-45s) [Moved Here to Break Dark Sections] */}
      <ServicesShowcase />

      {/* 4b. Solution Framing (Authority) */}
      <SolutionSection />

      {/* 6. Process/Methodology (Risk Reduction) */}
      <ProcessSection />

      {/* 5. Why Choose Us (15-20s) - REORDERED: Process comes before Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Proof / Case Studies (It Worked For Them) */}
      <ProofSection />

      {/* 8. Testimonials (Emotional Validation) */}
      <TestimonialsSection />

      {/* 9. FAQ (Objection Removal) */}
      <FAQSection />

      {/* 7. Portfolio / Selected Work (30-40s) */}
      <RecentProjects />

      {/* 8. Stats & Achievements (10-15s) */}
      <StatsSection />

      {/* 9. Technologies (15-20s) */}
      <Technologies />

      {/* 10. Testimonials (Video + Text) (20-30s) */}
      <VideoTestimonials />

      {/* 11. Case Studies (40-60s) */}
      <CaseStudies />

      {/* 12. Team Section (15-20s) */}
      <TeamSection />

      {/* 13. Certifications (10-15s) */}
      <Certifications />

      {/* 14. Pricing/Packages (20-30s) */}
      <PricingSection />

      {/* 15. FAQ Section (30-40s) */}
      {/* <FAQSection /> Removed */}

      {/* 16. Blog/Insights (20-30s) */}
      <BlogSection />

      {/* 17. Contact Form (30-60s) */}
      <ContactSection />

      {/* 18. Final CTA (5-10s) */}
      <CTASection />
    </main>
  );
}



