import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JoinAgent from "./pages/JoinAgent";
import JoinPartner from "./pages/JoinPartner";
import JoinSupporter from "./pages/JoinSupporter";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster  />
      <Sonner richColors  />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join-agent" element={<JoinAgent />} />
          <Route path="/join-partner" element={<JoinPartner />} />
          <Route path="/join-supporter" element={<JoinSupporter />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
