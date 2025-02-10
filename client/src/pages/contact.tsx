import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Contact as ContactSection } from "@/components/sections/contact";
import { PageTransition } from "@/components/providers/animation-provider";

export default function Contact() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
        <Header />
        <main className="flex-1 pt-24">
          <ContactSection />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}