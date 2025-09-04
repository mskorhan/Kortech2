import { SITE } from './config';

export const createLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.URL}/#business`,
  "name": SITE.NAME,
  "url": SITE.URL,
  "telephone": SITE.PHONE,
  "email": SITE.EMAIL,
  "logo": `${SITE.URL}/transparent-logo-1.png`,
  "image": `${SITE.URL}/transparent-logo-1.png`,
  "description": "Professional computer repair, Mac & PC repair, virus removal, data recovery & IT support in Charlotte, Matthews, Mint Hill, Indian Trail, Waxhaw, Pineville, Ballantyne. Call 704-246-7642!",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1721 Sardis Rd N, Suite 7A",
    "addressLocality": "Charlotte",
    "addressRegion": "NC",
    "postalCode": "28270",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": SITE.GEO.latitude,
    "longitude": SITE.GEO.longitude
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "11:00",
      "closes": "16:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "96"
  },
  "areaServed": SITE.AREAS.map(area => ({
    "@type": "City",
    "name": area,
    "addressRegion": "NC"
  })),
  "sameAs": [
    SITE.SOCIAL.facebook,
    SITE.SOCIAL.instagram,
    SITE.SOCIAL.twitter,
    SITE.SOCIAL.linkedin,
    SITE.SOCIAL.youtube,
    SITE.SOCIAL.google
  ]
});

export const createServiceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": SITE.NAME,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1721 Sardis Rd N, Suite 7A",
      "addressLocality": "Charlotte",
      "addressRegion": "NC",
      "postalCode": "28270"
    },
    "telephone": SITE.PHONE
  },
  "areaServed": SITE.AREAS.map(area => ({
    "@type": "City",
    "name": area,
    "addressRegion": "NC"
  })),
  "offers": {
    "@type": "Offer",
    "availability": "InStock",
    "description": `Professional ${serviceName.toLowerCase()} services`
  }
});

export const createFAQSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const createBreadcrumbSchema = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `${SITE.URL}${crumb.url}`
  }))
});