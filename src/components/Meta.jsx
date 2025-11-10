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
  title: 'Mahmoud Saadaoui - Full-Stack Developer',
  description: 'Mahmoud Saadaoui\'s personal portfolio showcasing projects, skills, and contact information.',
  keywords: 'Mahmoud Saadaoui, Full-Stack Developer, Portfolio, Projects, Skills, Contact',
};

export default Meta;