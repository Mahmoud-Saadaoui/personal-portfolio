import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

const Meta = ({
  title = "Mahmoud Saadaoui | Full Stack Developer",
  description = "Full-stack developer focused on building fast, scalable, and reliable web applications.",
  keywords = "mahmoud, mahmoud saadaoui, saadaoui, full stack developer, react, next.js, node.js",
  image = "/favicon.png",
  type = "website"
}) => {
  const location = useLocation();

  const url = useMemo(
    () => window.location.href,
    [location.pathname, location.search]
  );

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mahmoud Saadaoui" />
    </Helmet>
  );
};

export default Meta;
