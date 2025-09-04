import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { SITE } from './config';

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  ogImage?: string;
  ogType?: string;
  jsonLd?: any[];
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  canonical,
  noindex = false,
  ogImage = `${SITE.URL}/og.jpg`,
  ogType = "website",
  jsonLd = []
}) => {
  const location = useLocation();
  
  // Clean canonical URL
  const cleanCanonicalPath = canonical || location.pathname;
  const fullCanonicalUrl = `${SITE.URL}${cleanCanonicalPath === '/' ? '' : cleanCanonicalPath}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Robots meta */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE.NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@kortechservice" />

      {/* Local SEO meta tags */}
      <meta name="geo.region" content="US-NC" />
      <meta name="geo.position" content={`${SITE.GEO.latitude};${SITE.GEO.longitude}`} />
      <meta name="ICBM" content={`${SITE.GEO.latitude}, ${SITE.GEO.longitude}`} />

      {/* JSON-LD Schema */}
      {jsonLd.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default Seo;