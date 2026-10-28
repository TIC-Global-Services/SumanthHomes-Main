import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Metadata map for each route in Sumanth Homes website.
 * Includes page title, meta description, keywords, Open Graph, Twitter cards, and canonical URL.
 */
export const SITE_METADATA = {
  default: {
    siteName: 'Sumanth Homes',
    domain: 'https://sumanthhomes.com',
    defaultImage: 'https://sumanthhomes.com/lotus-villas-bg.png',
    title: 'Sumanth Homes | Premium Luxury Living Spaces in Tirupati',
    description:
      'Sumanth Homes is a premier real estate developer in Tirupati delivering premium 2 & 3 BHK apartments, luxury gated community villas, and commercial spaces with timeless architecture and Vaastu compliance.',
    keywords:
      'Sumanth Homes, Tirupati real estate, luxury villas Tirupati, 2 BHK apartments Tirupati, 3 BHK apartments Tirupati, Lotus Serene Villas, Urbanscapes, Pearl Abode, gated community Tirupati, property developer Tirupati',
    author: 'Sumanth Homes',
    type: 'website',
  },
  routes: {
    '/': {
      title: 'Sumanth Homes | Luxury Villas & Premium Apartments in Tirupati',
      description:
        'Discover premium living spaces crafted by Sumanth Homes in Tirupati. Explore luxury gated villas like Lotus Serene and modern high-rise apartments with world-class amenities.',
      keywords:
        'Sumanth Homes Tirupati, luxury homes Tirupati, gated communities, Lotus Serene Villas, Urbanscapes Tirupati, premium villas Tirupati, residential apartments',
      canonical: '/',
    },
    '/about': {
      title: 'About Us | Sumanth Homes - Crafting Contemporary Buildings with Elegance',
      description:
        'Established in 2013, Sumanth Homes brings over 30 years of industry leadership under Managing Partner Manohar Katta, delivering 280+ residential and commercial landmarks in Tirupati.',
      keywords:
        'About Sumanth Homes, Manohar Katta, builders in Tirupati, trusted construction company, real estate developer Tirupati history, architectural excellence',
      canonical: '/about',
    },
    '/projects': {
      title: 'Our Projects | Luxury Villas & High-Rise Living by Sumanth Homes',
      description:
        'Explore ongoing and completed residential and commercial projects by Sumanth Homes in Tirupati: Lotus Serene Villas, Urbanscapes, Pearl Abode, Garuda Gateway, and more.',
      keywords:
        'Sumanth Homes projects, ongoing projects Tirupati, completed villas Tirupati, new residential apartments, Lotus Serene Phase 2, Urbanscapes, Garuda Gateway',
      canonical: '/projects',
    },
    '/contact': {
      title: 'Contact Sumanth Homes | Reach Our Sales & Consultation Team',
      description:
        'Get in touch with Sumanth Homes. Visit our office at Lotus Serene Villas, Renigunta Road, Tirupati, or call +91 8220 637727 to book a private consultation for your dream home.',
      keywords:
        'Contact Sumanth Homes, Tirupati office address, real estate consultation Tirupati, Lotus Serene Villas address, Sumanth Homes phone number',
      canonical: '/contact',
    },
    '/urbanscapes': {
      title: 'Urbanscapes | Contemporary 2 & 3 BHK High-Rise Residences in Tirupati',
      description:
        'Urbanscapes by Sumanth Homes offers thoughtfully designed 2 & 3 BHK high-rise apartments in Tirupati featuring modern architecture, premium amenities, and 100% Vaastu compliance.',
      keywords:
        'Urbanscapes Tirupati, 2 BHK flats Tirupati, 3 BHK apartments Tirupati, high rise apartments Tirupati, Sumanth Homes Urbanscapes',
      canonical: '/urbanscapes',
    },
    '/lotus-villas-phase-2': {
      title: 'Lotus Serene Villas Phase 2 | Exclusive Gated Community Villas in Tirupati',
      description:
        'Lotus Serene Villas Phase 2 by Sumanth Homes offers 31 contemporary luxury villas with clubhouse, landscaped gardens, 24/7 security, and lifestyle amenities on Renigunta Road, Tirupati.',
      keywords:
        'Lotus Serene Villas Phase 2, luxury villas Renigunta Road, gated villa community Tirupati, Sumanth Homes villas, 31 contemporary villas',
      canonical: '/lotus-villas-phase-2',
    },
    '/lotus-villas-phase-1': {
      title: 'Lotus Serene Villas Phase 1 | Handcrafted Luxury Villas in Tirupati',
      description:
        'Discover Lotus Serene Villas Phase 1, our landmark completed villa community in Tirupati offering bespoke architecture, expansive layouts, and timeless craftsmanship.',
      keywords:
        'Lotus Serene Villas Phase 1, completed villas Tirupati, Sumanth Homes villa projects, gated communities Renigunta Road',
      canonical: '/lotus-villas-phase-1',
    },
    '/pearl-abode': {
      title: 'Pearl Abode | Premium Modern Apartments by Sumanth Homes',
      description:
        'Pearl Abode presents thoughtfully crafted residential apartments with state-of-the-art amenities, high-quality finishes, and convenient connectivity in Tirupati.',
      keywords:
        'Pearl Abode Tirupati, Pearl Abode apartments, Sumanth Homes residential, luxury flats Tirupati',
      canonical: '/pearl-abode',
    },
    '/kbr-brindavanam': {
      title: 'KBR Brindavanam | Serene Residential Living in Tirupati',
      description:
        'Experience calm and community living at KBR Brindavanam by Sumanth Homes, featuring serene surroundings, superior construction quality, and elegant living spaces.',
      keywords:
        'KBR Brindavanam Tirupati, Sumanth Homes KBR, residential community Tirupati, luxury homes Tirupati',
      canonical: '/kbr-brindavanam',
    },
    '/padmavathi-garden': {
      title: 'MN Sri Padmavati Gardens | Premium Gated Villa Enclave in Tirupati',
      description:
        'MN Sri Padmavati Gardens by Sumanth Homes combines traditional values with modern comforts in an idyllic residential setting in Tirupati.',
      keywords:
        'MN Sri Padmavati Gardens, Padmavathi Gardens Tirupati, villa enclave Tirupati, Sumanth Homes completed projects',
      canonical: '/padmavathi-garden',
    },
    '/garudan-gateway': {
      title: 'Garuda Gateway | Premier Commercial & Residential Landmark in Tirupati',
      description:
        'Garuda Gateway by Sumanth Homes is a premier commercial and residential project offering strategic location advantages, modern design, and robust infrastructure.',
      keywords:
        'Garuda Gateway Tirupati, commercial spaces Tirupati, Garuda Gateway residential, Sumanth Homes projects',
      canonical: '/garudan-gateway',
    },
    '/jasmine-ridge': {
      title: 'Jasmine Ridge | Elegant Residential Haven by Sumanth Homes',
      description:
        'Jasmine Ridge by Sumanth Homes offers tranquil living, thoughtful architectural design, and modern lifestyle comforts for modern families.',
      keywords:
        'Jasmine Ridge Tirupati, Sumanth Homes Jasmine Ridge, premium residences Tirupati',
      canonical: '/jasmine-ridge',
    },
    '/projects/villa1': {
      title: 'Lotus Serene Villas - Project Details & Specifications | Sumanth Homes',
      description:
        'Detailed floor plans, specifications, amenities, and location map for Lotus Serene Villas Phase 2 in Tirupati by Sumanth Homes.',
      keywords:
        'Lotus Serene floor plans, specifications, master plan, amenities, Tirupati villa details',
      canonical: '/projects/villa1',
    },
    '/projects/villa2': {
      title: 'Urbanscapes - High-Rise Project Details & Floor Plans | Sumanth Homes',
      description:
        'Explore 2 & 3 BHK floor plans, architectural specifications, and lifestyle amenities for Urbanscapes in Tirupati by Sumanth Homes.',
      keywords:
        'Urbanscapes floor plans, specifications, 2 BHK 3 BHK Tirupati, high rise master plan',
      canonical: '/projects/villa2',
    },
  },
};

/**
 * Helper to update or inject a <meta> tag by name or property attribute.
 */
function setMetaTag(attributeName, attributeValue, content) {
  if (!content) return;
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Helper to update or inject canonical <link>.
 */
function setCanonical(href) {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

/**
 * SEO Manager hook: dynamically updates title, description, open graph tags,
 * twitter tags, canonical links, and injects Schema.org JSON-LD for every route.
 */
export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname.replace(/\/$/, '') || '/';
    const pageData = SITE_METADATA.routes[pathname] || SITE_METADATA.default;
    const base = SITE_METADATA.default;

    const pageTitle = pageData.title || base.title;
    const pageDesc = pageData.description || base.description;
    const pageKeywords = pageData.keywords || base.keywords;
    const pageCanonical = `${base.domain}${pageData.canonical || pathname}`;
    const pageImage = pageData.image || base.defaultImage;

    // Document Title
    document.title = pageTitle;

    // Standard Meta Tags
    setMetaTag('name', 'description', pageDesc);
    setMetaTag('name', 'keywords', pageKeywords);
    setMetaTag('name', 'author', base.author);
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Open Graph / Facebook
    setMetaTag('property', 'og:site_name', base.siteName);
    setMetaTag('property', 'og:title', pageTitle);
    setMetaTag('property', 'og:description', pageDesc);
    setMetaTag('property', 'og:url', pageCanonical);
    setMetaTag('property', 'og:type', pageData.type || 'website');
    setMetaTag('property', 'og:image', pageImage);
    setMetaTag('property', 'og:locale', 'en_IN');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', pageTitle);
    setMetaTag('name', 'twitter:description', pageDesc);
    setMetaTag('name', 'twitter:image', pageImage);

    // Canonical link
    setCanonical(pageCanonical);

    // Structured Data (JSON-LD) for LocalBusiness / RealEstateAgent
    let scriptTag = document.getElementById('sumanth-schema-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'sumanth-schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'RealEstateAgent',
          '@id': `${base.domain}/#organization`,
          name: 'Sumanth Homes',
          url: base.domain,
          logo: `${base.domain}/sumanthHomesLogo.png`,
          image: pageImage,
          description: base.description,
          telephone: '+91-8220637727',
          email: 'info@domain.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Villa No.3, Lotus Serene Villas, Near Autonagar, Renigunta Road',
            addressLocality: 'Tirupati',
            addressRegion: 'Andhra Pradesh',
            postalCode: '517501',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 13.6264,
            longitude: 79.4538,
          },
          priceRange: '₹₹₹',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
              opens: '09:00',
              closes: '19:00',
            },
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${base.domain}/#website`,
          url: base.domain,
          name: 'Sumanth Homes',
          publisher: {
            '@id': `${base.domain}/#organization`,
          },
        },
        {
          '@type': 'WebPage',
          '@id': `${pageCanonical}#webpage`,
          url: pageCanonical,
          name: pageTitle,
          description: pageDesc,
          isPartOf: {
            '@id': `${base.domain}/#website`,
          },
          inLanguage: 'en-IN',
        },
      ],
    };

    scriptTag.textContent = JSON.stringify(schemaData);
  }, [location.pathname]);
};
