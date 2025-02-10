import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ErrorBoundary } from "@/components/error-boundary";
import Home from "@/pages/home";
import About from "@/pages/about";
import Certificates from "@/pages/certificates";
import Contact from "@/pages/contact";
import References from "@/pages/references";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import ToiletPaper from "@/pages/products/toilet-paper";
import Dispensers from "@/pages/products/dispensers";
import TrashBags from "@/pages/products/trash-bags";
import Hygiene from "@/pages/products/hygiene";
import NotFound from "@/pages/not-found";

// Router component
function Router() {
  return (
    <>
      <ScrollToTop />
      <ErrorBoundary>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/certificates" component={Certificates} />
          <Route path="/contact" component={Contact} />
          <Route path="/references" component={References} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/products/toilet-paper" component={ToiletPaper} />
          <Route path="/products/dispensers" component={Dispensers} />
          <Route path="/products/trash-bags" component={TrashBags} />
          <Route path="/products/hygiene" component={Hygiene} />
          <Route component={NotFound} />
        </Switch>
      </ErrorBoundary>
    </>
  );
}

// Main App component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;