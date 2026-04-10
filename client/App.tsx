import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import VisionExperience from "./pages/VisionExperience";
import VisionExperiencePricing from "./pages/VisionExperiencePricing";
import VisionExperienceForm from "./pages/VisionExperienceForm";
import VisionExperienceConfirmation from "./pages/VisionExperienceConfirmation";
import Books from "./pages/Books";
import BooksCart from "./pages/BooksCart";
import BooksCheckout from "./pages/BooksCheckout";
import BooksConfirmation from "./pages/BooksConfirmation";
import Contact from "./pages/Contact";
import VirtualAssistant from "./pages/VirtualAssistant";
import VirtualAssistantForm from "./pages/VirtualAssistantForm";
import VirtualAssistantConfirmation from "./pages/VirtualAssistantConfirmation";
import EducationalConsulting from "./pages/EducationalConsulting";
import EducationalConsultingForm from "./pages/EducationalConsultingForm";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signup" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision-experience" element={<VisionExperience />} />
            <Route path="/vision-experience-pricing" element={<VisionExperiencePricing />} />
            <Route path="/vision-experience-form" element={<VisionExperienceForm />} />
            <Route path="/vision-experience-confirmation" element={<VisionExperienceConfirmation />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/cart" element={<BooksCart />} />
            <Route path="/books/checkout" element={<BooksCheckout />} />
            <Route path="/books/confirmation" element={<BooksConfirmation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<EducationalConsulting />} />
            <Route path="/educational-consulting-form" element={<EducationalConsultingForm />} />
            <Route path="/virtual-assistant" element={<VirtualAssistant />} />
            <Route path="/virtual-assistant-form" element={<VirtualAssistantForm />} />
            <Route path="/virtual-assistant-confirmation" element={<VirtualAssistantConfirmation />} />
            <Route path="/educational-consulting" element={<EducationalConsulting />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
