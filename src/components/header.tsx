import Link from 'next/link';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const socialLinks = [
  {
    href: "https://github.com/WallaceReiss",
    label: "Github",
    icon: Github,
    color: "hover:text-gray-700 dark:hover:text-gray-300"
  },
  {
    href: "https://www.linkedin.com/in/wallace-reis-oliveira/",
    label: "LinkedIn",
    icon: Linkedin,
    color: "hover:text-blue-600 dark:hover:text-blue-500"
  },
  {
    href: "https://www.instagram.com/ww_reis?igsh=MXA4ZGpuZTAxeXJhZg==",
    label: "Instagram",
    icon: Instagram,
    color: "hover:text-pink-500 dark:hover:text-pink-400"
  },
];


const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline text-lg">Wallace Reis Oliveira</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
             {socialLinks.map(social => (
              <Link key={social.label} href={social.href} target="_blank" aria-label={social.label} className={`p-2 rounded-full transition-colors duration-300 ${social.color} bg-transparent`}>
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
