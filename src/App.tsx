import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChatAssist from "@/components/LiveChatAssist";
import GlobalScrollCta from "@/components/GlobalScrollCta";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FaqPage from "@/pages/FaqPage";
import ContactPage from "@/pages/ContactPage";
import ServicesPage from "@/pages/ServicesPage";
import ProjectDetailPage from "@/pages/ProjectDetailPage";

const queryClient = new QueryClient();

const LegacyProjectRedirect = () => {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/proyecto/${slug ?? ""}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonios" element={<Testimonials />} />
          <Route path="/casos" element={<CaseStudies />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contactos" element={<ContactPage />} />
          <Route path="/servicios" element={<ServicesPage />} />

          <Route path="/project/:slug" element={<LegacyProjectRedirect />} />
          <Route path="/proyecto/:slug" element={<ProjectDetailPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <GlobalScrollCta />
        <FloatingWhatsApp />
        <LiveChatAssist />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
