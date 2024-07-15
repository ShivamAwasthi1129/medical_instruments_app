import HeroSection from "@/components/HeroSection";
import ProductCategory from "@/components/ProductCategory";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
  <main className="min-h-s bg-white antialiased ">
   {/* <h1 className="text-2xl text-center ">Medical Instruments</h1> */}
   <HeroSection/>
   <ProductCategory/>
   <Testimonials/>
   
  </main>
  );
}
