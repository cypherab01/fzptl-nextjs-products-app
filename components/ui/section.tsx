import clsx from 'clsx';

type SectionProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export default function Section({
  children,
  size = 'md',
  className,
}: SectionProps) {
  const spacing = {
    sm: 'py-6 md:py-8',
    md: 'py-10 md:py-14 lg:py-16',
    lg: 'py-14 md:py-20 lg:py-24',
  };

  return (
    <section className={clsx(spacing[size], className)}>{children}</section>
  );
}
