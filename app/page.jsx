import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import IngredientsSection from "@/components/IngredientsSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen  text-neutral-900">
      {/* <Navbar /> */}
      <Hero />
      <ProductsSection />
      <IngredientsSection />
      <AboutSection />
      <Footer />
    </main>
  );
}

