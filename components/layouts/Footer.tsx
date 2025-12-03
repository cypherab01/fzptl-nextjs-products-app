import Link from 'next/link';
import Section from '../ui/section';
import { Typography } from '../ui/typography';
import { siteConfig } from '@/constants/siteConfig';

const Footer = () => {
  return (
    <footer>
      <Section size="sm">
        <Typography variant="p" align="center">
          Developed by{' '}
          <Link
            className="link"
            href={siteConfig.developer.telegram}
            target="_blank"
          >
            Abhishek Ghimire
          </Link>{' '}
          · Source code available on{' '}
          <Link
            className="link"
            href={siteConfig.developer.github}
            target="_blank"
          >
            GitHub
          </Link>
        </Typography>
      </Section>
    </footer>
  );
};

export default Footer;
