import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
