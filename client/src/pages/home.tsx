import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Products } from "@/components/sections/products";
import { About } from "@/components/sections/about";
import { Certificates } from "@/components/sections/certificates";
import { References } from "@/components/sections/references";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Products />
        <About />
        <Certificates variant="slideshow" limit={4} />
        <References limit={8} />
      </main>
      <Footer />
    </div>
  );
}