import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Certificates as CertificatesSection } from "@/components/sections/certificates";
import { PageTransition } from "@/components/providers/animation-provider";

export default function Certificates() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 mt-16 pt-8">
          <CertificatesSection showIntro />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}