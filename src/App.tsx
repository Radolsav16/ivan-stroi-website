import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/about-us/AboutUs";
import Contacts from "./pages/contacts/Contacts";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
