'use client';
import { useI18n } from '@/i18n';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useI18n();

  const toggleLocale = () => {
    setLocale(locale === 'pt' ? 'en' : 'pt');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleLocale} aria-label="Mudar idioma" className="flex items-center gap-2 px-2">
      <Globe className="h-5 w-5" />
      <span className="font-mono text-xs">{locale.toUpperCase()}</span>
    </Button>
  );
};

export default LanguageSwitcher;
