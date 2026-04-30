import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for handling head metadata
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - Page keywords
 * @param {string} props.image - Social sharing image
 * @param {string} props.url - Page canonical URL
 * @param {string} props.type - Page type (website, article, etc.)
 */
const SEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/og-image.png', 
  url = window.location.href, 
  type = 'website' 
}) => {
  const siteTitle = 'CareGroom';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'CareGroom is your premium destination for high-end grooming and care services. Connect with professionals and book your sessions seamlessly.';
  const finalDescription = description || defaultDescription;
  const defaultKeywords = 'grooming, care services, professional grooming, marketplace, high-end care, CareGroom, beauty services, home care';
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#1a2e2a" /> {/* Velvet Sage color */}
    </Helmet>
  );
};

export default SEO;
