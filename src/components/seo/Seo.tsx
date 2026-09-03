import { useEffect } from "react";

const DEFAULT_TITLE = "IVANOV STROI | Строителство и ремонти в София";
const DEFAULT_DESCRIPTION =
  "IVANOV STROI извършва строителство, ремонти и довършителни дейности в София и околностите.";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  structuredData?: Record<string, unknown>;
};

const updateMeta = (selector: string, attribute: "name" | "property", value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, selector.match(/\[.*?=['"](.*?)['"]/i)?.[1] ?? "");
    document.head.appendChild(element);
  }

  element.content = value;
};

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title === DEFAULT_TITLE ? title : `${title} | IVANOV STROI`;
    const siteUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");

    document.title = fullTitle;
    updateMeta('meta[name="description"]', "name", description);
    updateMeta('meta[property="og:title"]', "property", fullTitle);
    updateMeta('meta[property="og:description"]', "property", description);
    updateMeta('meta[property="og:type"]', "property", "website");
    updateMeta('meta[name="twitter:card"]', "name", "summary");
    updateMeta('meta[name="twitter:title"]', "name", fullTitle);
    updateMeta('meta[name="twitter:description"]', "name", description);

    const existingCanonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (siteUrl) {
      const canonical = existingCanonical ?? document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = `${siteUrl}${path === "/" ? "" : path}`;

      if (!existingCanonical) {
        document.head.appendChild(canonical);
      }
    } else {
      existingCanonical?.remove();
    }
  }, [description, path, title]);

  if (!structuredData) {
    return null;
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
}
