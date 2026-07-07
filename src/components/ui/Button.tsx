import { ReactNode } from 'react';

type Props = {
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
};

const base =
  'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg';
const variants = {
  primary: 'bg-accent text-bg hover:bg-accentHot hover:shadow-glow',
  ghost: 'border border-border text-text hover:border-accent hover:text-accent',
};

export default function Button({ variant = 'primary', href, onClick, children, className = '', ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return <a href={href} className={cls} onClick={onClick} {...rest}>{children}</a>;
  }
  return <button type="button" className={cls} onClick={onClick} {...rest}>{children}</button>;
}
