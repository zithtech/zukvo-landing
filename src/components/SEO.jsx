import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE, getRouteSEO } from "@/data/seo";

export default function SEO({ path: pathOverride }) {
  const location = useLocation();
  const path = pathOverride || location.pathname || "/";
  const seo = getRouteSEO(path) || {};

  const title = seo.titleExact
    ? seo.title || SITE.defaultTitle
    : seo.title
    ? `${seo.title} | ${SITE.name}`
    : SITE.defaultTitle;
  const description = seo.description || SITE.defaultDescription;
  const canonical = `${SITE.url}${path === "/" ? "" : path}`;
  const ogImage = `${SITE.url}${seo.ogImage || SITE.ogImage}`;
  const keywords = (seo.keywords || []).join(", ");
  const robots = seo.noindex ? "noindex,nofollow" : "index,follow";
  const jsonLd = seo.jsonLd || [];

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
