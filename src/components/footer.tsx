import { Github, Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    href: "https://github.com",
    label: "Github",
    icon: Github,
    color: "hover:text-gray-700 dark:hover:text-gray-300"
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: Linkedin,
    color: "hover:text-blue-600 dark:hover:text-blue-500"
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: Instagram,
    color: "hover:text-pink-500 dark:hover:text-pink-400"
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Wallace Reis Oliveira. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
           {socialLinks.map(social => (
              <Link key={social.label} href={social.href} target="_blank" aria-label={social.label} className={`p-2 rounded-full transition-colors duration-300 ${social.color} bg-transparent`}>
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
