import Section from '@/components/ui/section';
import { Typography } from '../ui/typography';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <Section size="sm">
      <Typography variant="h2">{title}</Typography>
      <Typography variant="p">{description}</Typography>
    </Section>
  );
};

export default SectionHeader;
