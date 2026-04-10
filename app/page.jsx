import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import IngredientsSection from "@/components/IngredientsSection";
import Footer from "@/components/Footer";
import Features from "@/components/Features"
import WhyChooseUs from "@/components/WhyChooseUs"

export default function HomePage() {
  return (
    <main className="min-h-screen text-neutral-900 color-blue">
      <Navbar />
      <Hero />
      <Features />
      <IngredientsSection />
      <ProductsSection />
      <WhyChooseUs />
      <AboutSection />
      <Footer />
    </main>
  );
}

