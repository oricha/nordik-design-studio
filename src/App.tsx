import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import CaseStudies from "./pages/CaseStudies";
import ProjectTorku from "./pages/ProjectTorku";
import ProjectTampere from "./pages/ProjectTampere";
import ProjectKuusamo from "./pages/ProjectKuusamo";
import ProjectOulu from "./pages/ProjectOulu";
import ProjectLevi from "./pages/ProjectLevi";
import ProjectHelsinki from "./pages/ProjectHelsinki";
import ProjectTunturi from "./pages/ProjectTunturi";
import ProjectSodankyla from "./pages/ProjectSodankyla";
import ProjectDetail from "./components/ProjectDetail";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChatAssist from "@/components/LiveChatAssist";
import GlobalScrollCta from "@/components/GlobalScrollCta";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FaqPage from "@/pages/FaqPage";
import ContactPage from "@/pages/ContactPage";
import ServicesPage from "@/pages/ServicesPage";

const queryClient = new QueryClient();

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
          {/* Legacy routes - kept for backward compatibility */}
          <Route path="/project/torku" element={<ProjectTorku />} />
          <Route path="/project/tampere" element={<ProjectTampere />} />
          <Route path="/project/kuusamo" element={<ProjectKuusamo />} />
          <Route path="/project/oulu" element={<ProjectOulu />} />
          <Route path="/project/levi" element={<ProjectLevi />} />
          <Route path="/project/helsinki" element={<ProjectHelsinki />} />
          <Route path="/project/tunturi" element={<ProjectTunturi />} />
          <Route path="/project/sodankyla" element={<ProjectSodankyla />} />

          {/* Dynamic project route (Spanish) */}
          <Route path="/proyecto/:slug" element={<ProjectDetail />} />

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
