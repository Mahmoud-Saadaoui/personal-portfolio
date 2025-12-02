import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "My Website",
  description: "Welcome to my website",
  keywords: "mahmoud, mahmoud saadaoui, saadaoui, my website",
};

export default Meta;
