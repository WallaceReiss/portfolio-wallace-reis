'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n';
import LanguageSwitcher from './language-switcher';

const Header = () => {
  const { t } = useI18n();

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.career, href: '#career' },
    { name: t.nav.personal, href: '#personal' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-background/60 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="group flex items-center gap-2 font-mono text-xl font-bold tracking-tighter">
          <span className="text-primary transition-transform group-hover:scale-110">/</span>
          <span>WRO</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;