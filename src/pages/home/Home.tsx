import ContactForm from "../../components/contact-form/ContactForm";
import Hero from "../../components/hero/Hero";
import HowWeWork from "../../components/how-we-work/HowWeWork";
import StrongSides from "../../components/marketing/strong-sides/StrongSides";
import WorkWithUs from "../../components/marketing/work-with-us/WorkWithUs";
import Reviews from "../../components/reviews/Reviews";
import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";
import Layout from "../../Layout";
export default function Home(){
    return (
        <Layout>
         <Hero />
         <StrongSides />
         <Services />
         <WorkWithUs />
         <Slider />
         <HowWeWork />
         <Reviews />
        <ContactForm />
        </Layout>
    );
}