import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TranslationProvider } from "./hooks/useTranslation";
import Index from "./pages/Index";
import Coworking from "./pages/Coworking";
import Winebar from "./pages/Winebar";
import VirtualTour from "./pages/VirtualTour";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import LegalNotice from "./pages/legal/LegalNotice";
import Cookies from "./pages/legal/Cookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TranslationProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/coworking" element={<Coworking />} />
            <Route path="/winebar" element={<Winebar />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </TranslationProvider>
  </QueryClientProvider>
);

export default App