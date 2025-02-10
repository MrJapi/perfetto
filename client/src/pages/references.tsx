import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { References as ReferencesSection } from "@/components/sections/references";

export default function References() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <ReferencesSection />
      </main>
      <Footer />
    </div>
  );
}
