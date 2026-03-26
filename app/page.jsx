import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-100 text-neutral-900">
      <Navbar />
      <Hero />
      <ProductsSection />
      <AboutSection />
      <Footer />
    </main>
  );
}

