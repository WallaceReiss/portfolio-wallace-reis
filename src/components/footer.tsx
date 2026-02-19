'use client';

import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from '@/i18n';
import { motion } from 'framer-motion';
import { WhatsappIcon } from './icons/WhatsappIcon';

const socialLinks = [
  {
    href: "https://github.com/WallaceReiss",
    label: "Github",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/wallace-reis-oliveira/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:wallace.w_reis@hotmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://wa.me/5511998146779",
    label: "WhatsApp",
    icon: WhatsappIcon,
  }
];

const builtWith = [
  "Next.js 15",
  "React 18",
  "Tailwind CSS",
  "Framer Motion",
  "TypeScript"
];

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="snap-section w-full border-t border-white/[0.05] bg-[#0a0514] pt-16 pb-8 flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl px-6 sm:px-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 sm:gap-6">
          {/* Logo & Copyright */}
          <div className="space-y-4">
            <Link href="/" className="group flex items-center gap-2 font-mono text-xl font-bold tracking-tighter">
              <span className="text-primary transition-transform group-hover:scale-110">/</span>
              <span>WRO</span>
            </Link>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground font-sans">
                &copy; {new Date().getFullYear()} {t.footer.copyrightOwner}
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40 font-mono">
                {t.footer.copyright}
              </p>
            </div>
          </div>

          {/* Social Presence */}
          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary/80">Social Presence</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map(social => (
                <Link 
                  key={social.label} 
                  href={social.href} 
                  target="_blank" 
                  aria-label={social.label} 
                  className="group relative h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 transition-all hover:border-primary/40 hover:bg-primary/10"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Engineered With */}
          <div className="space-y-6">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-primary/80 flex items-center gap-2">
              <Code2 className="h-3 w-3" />
              Engineered With
            </h4>
            <div className="flex flex-wrap gap-2">
              {builtWith.map(tech => (
                <span key={tech} className="text-[10px] font-mono text-muted-foreground/60 border border-white/5 px-2 py-1 rounded bg-white/[0.02]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.05] gap-4 sm:gap-2">
          <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/40 sm:gap-4 sm:flex-wrap sm:justify-center">
            <Link href="#about" className="hover:text-primary transition-colors">About</Link>
            <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          </div>
          <div className="text-[10px] font-mono text-muted-foreground/30">
            SÃO PAULO // BRAZIL // 23.5505° S, 46.6333° W
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
