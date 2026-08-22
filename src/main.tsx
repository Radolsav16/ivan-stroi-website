// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gallery from './pages/gallery/Gallery.tsx'
import Contacts from './pages/contacts/Contacts.tsx'
import AboutUs from './pages/about-us/AboutUs.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<Contacts />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
)
