import { Header } from "./header";
import { Footer } from "./footer";
import { ReactNode } from "react";

interface ProductLayoutProps {
  children: ReactNode;
}

export function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-16 pt-8 pb-20">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}