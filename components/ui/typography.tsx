// https://github.com/ab-cloud-services-np/better-gist/blob/main/Typography.tsx

import { ReactNode } from 'react';
import { cn } from '@/helpers/utils';

type Variant = 'h1' | 'h2' | 'h3' | 'p';
type Align = 'left' | 'center' | 'right' | 'justify';

interface TypographyProps {
  variant?: Variant;
  align?: Align;
  children: ReactNode;
  className?: string;
}

export function Typography({
  variant = 'p',
  align = 'left',
  children,
  className,
}: TypographyProps) {
  const baseStyles: Record<Variant, string> = {
    h1: 'text-3xl mb-2 font-semibold text-foreground',
    h2: 'text-2xl my-2 font-bold',
    h3: 'text-xl font-medium',
    p: 'text-gray-600',
  };

  const alignClasses: Record<Align, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const Tag = variant;

  return (
    <Tag className={cn(baseStyles[variant], alignClasses[align], className)}>
      {children}
    </Tag>
  );
}
