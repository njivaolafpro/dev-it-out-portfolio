export type Social = {
  id: string;
  label: string;
  href: string;
  icon: 'mail' | 'linkedin' | 'calendar' | 'github';
};

export const socials: Social[] = [
  { id: 'calendly', label: 'Book me', href: 'https://calendly.com/nji-olaf', icon: 'calendar' },
  { id: 'email', label: 'njivaolaf.pro@gmail.com', href: 'mailto:njivaolaf.pro@gmail.com', icon: 'mail' },
  { id: 'linkedin', label: 'njiva-olaf', href: 'https://www.linkedin.com/in/njiva-olaf/', icon: 'linkedin' },
];
