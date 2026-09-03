import { lazy, Suspense } from "react";
import Hero from "../../components/hero/Hero";
import HowWeWork from "../../components/how-we-work/HowWeWork";
import StrongSides from "../../components/marketing/strong-sides/StrongSides";
import WorkWithUs from "../../components/marketing/work-with-us/WorkWithUs";
import Seo from "../../components/seo/Seo";
import { organizationSchema } from "../../components/seo/data";
import Services from "../../components/services/Services";
import Layout from "../../Layout";

const Slider = lazy(() => import("../../components/slider/Slider"));
const Reviews = lazy(() => import("../../components/reviews/Reviews"));
const ContactForm = lazy(() => import("../../components/contact-form/ContactForm"));

function SectionFallback() {
  return <div className="min-h-24 bg-gray-950" aria-hidden="true" />;
}

export default function Home() {
  return (
    <Layout>
      <main>
        <Seo structuredData={organizationSchema} />
        <Hero />
        <StrongSides />
        <Services />
        <WorkWithUs />
        <Suspense fallback={<SectionFallback />}>
          <Slider />
        </Suspense>
        <HowWeWork />
        <Suspense fallback={<SectionFallback />}>
          <Reviews />
          <ContactForm />
        </Suspense>
      </main>
    </Layout>
  );
}
