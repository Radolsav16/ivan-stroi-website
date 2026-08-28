import { useParams, Navigate } from "react-router-dom";
import Layout from "../../Layout";
import Service from "./components/Service";
import { services } from "./data";

export default function Services() {
  const { serviceName } = useParams<{ serviceName: string }>();

  const service = serviceName ? services[serviceName] : undefined;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Layout>
      <main className="overflow-hidden bg-gray-950 text-white">
        <Service service={service} />
      </main>
    </Layout>
  );
}