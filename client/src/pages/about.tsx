import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { About as AboutSection } from "@/components/sections/about";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}