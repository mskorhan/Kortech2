import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  schema?: any[];
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  schema = [],
  ogImage = "https://www.kortechservice.com/transparent-logo-1.png",
  ogType = "website",
  noindex = false
}) => {
  const location = useLocation();
  
  // Clean canonical URL
  const cleanCanonicalPath = canonicalUrl || location.pathname;
  const fullCanonicalUrl = `https://www.kortechservice.com${cleanCanonicalPath === '/' ? '' : cleanCanonicalPath}`;
  
  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.kortechservice.com"
      }
    ]
  };

  // Add current page to breadcrumb if not home
  if (canonicalUrl && canonicalUrl !== '/') {
    const pathParts = canonicalUrl.split('/').filter(Boolean);
    pathParts.forEach((part, index) => {
      const position = index + 2;
      const name = part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const item = `https://www.kortechservice.com/${pathParts.slice(0, index + 1).join('/')}`;
      
      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": position,
        "name": name,
        "item": item
      });
    });
  }

  const allSchemas = [breadcrumbSchema, ...schema];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
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
      <meta property="og:site_name" content="KorTech Service" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@kortechservice" />

      {/* Local SEO meta tags */}
      <meta name="geo.region" content="US-NC" />
      <meta name="geo.position" content="35.2271;-80.8431" />
      <meta name="ICBM" content="35.2271, -80.8431" />
      <meta name="coverage" content="Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, Ballantyne, NC" />

      {/* Schema.org JSON-LD */}
      {allSchemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;