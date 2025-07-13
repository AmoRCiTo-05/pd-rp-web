import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import TenCodes from "./pages/BasicCodes/TenCodes";
import CodeComms from "./pages/BasicCodes/CodeComms";
import Training from "./pages/SOP/Training";
import MEU from "./pages/SOP/MEU";
import SEU from "./pages/SOP/SEU";
import ASD from "./pages/SOP/ASD";
import Dispatcher from "./pages/SOP/Dispatcher";
import AdvancedTerms from "./pages/AdvancedSOP/Terms";
import ShortForms from "./pages/ShortForms";
import CaseLaws from "./pages/CaseLaws";
import Amendments from "./pages/Amendments";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Basic Codes Routes */}
              <Route path="/basic-codes/10-codes" element={<TenCodes />} />
              <Route path="/basic-codes/code-comms" element={<CodeComms />} />
              
              {/* SOP Routes */}
              <Route path="/sop/training" element={<Training />} />
              <Route path="/sop/meu" element={<MEU />} />
              <Route path="/sop/seu" element={<SEU />} />
              <Route path="/sop/asd" element={<ASD />} />
              <Route path="/sop/dispatcher" element={<Dispatcher />} />
              
              {/* Advanced SOP Routes */}
              <Route path="/advanced-sop/terms" element={<AdvancedTerms />} />
              
              {/* Other Routes */}
              <Route path="/short-forms" element={<ShortForms />} />
              <Route path="/case-laws" element={<CaseLaws />} />
              <Route path="/amendments" element={<Amendments />} />
              <Route path="/about" element={<About />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
