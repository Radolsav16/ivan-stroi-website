import AboutUs from './components/about-us/AboutUs'
import ContactForm from './components/contact-form/ContactForm'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import HowWeWork from './components/how-we-work/HowWeWork'
import StrongSides from './components/marketing/strong-sides/StrongSides'
import WorkWithUs from './components/marketing/work-with-us/WorkWithUs'
import QuickActions from './components/quick-actions/QuickActions'
import Reviews from './components/reviews/Reviews'
import Services from './components/services/Services'
import Slider from './components/slider/Slider'


function App() {
  return (
    <>
    <Header />
    <Hero />
    <StrongSides />
    <QuickActions />
    <Services />
    <WorkWithUs />
    <Slider />
    <HowWeWork />
    <AboutUs />
    <Reviews />
    <ContactForm />
    <Footer />
    </>
  )
}

export default App
