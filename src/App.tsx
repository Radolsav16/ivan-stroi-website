import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingCallButtons from "./FloatingCallButtons";
import ScrollToTop from "./ScrollToTop";


const Home = lazy(() => import("./pages/home/Home"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Contacts = lazy(() => import("./pages/contacts/Contacts"));
const AboutUs = lazy(() => import("./components/about-us/AboutUs"));
const Services = lazy(() => import("./pages/service/Services"));
const NotFound = lazy(() => import("./NotFound"));

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950">
      <div className="size-8 animate-spin rounded-full border-2 border-white/20 border-t-orange-500" />
    </div>
  );
}

function App() {
  return (
      <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services/:serviceName" element={<Services />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        </ScrollToTop>
      </Suspense>
       <FloatingCallButtons />
    </BrowserRouter>
  );
}

export default App;
