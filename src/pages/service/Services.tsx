import { useParams, Navigate } from "react-router-dom";
import Layout from "../../Layout";
import Service from "./components/Service";
import { services } from "./data";
import Seo from "../../components/seo/Seo";

export default function Services() {
  const { serviceName } = useParams<{ serviceName: string }>();

  const service = serviceName ? services[serviceName] : undefined;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      <main className="overflow-hidden bg-gray-950 text-white">
        <Seo
          title={service.title}
          description={service.subtitle}
          path={`/services/${serviceName}`}
        />
        <Service service={service} />
      </main>
    </Layout>
  );
}
