
'use client';

import Link from 'next/link';
import { WhatsappIcon } from './icons/WhatsappIcon';

const FloatingWhatsApp = () => {
  return (
    <Link
      href="https://wa.me/5511998146779"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
      aria-label="Entre em contato pelo WhatsApp"
    >
      <WhatsappIcon className="h-8 w-8 text-white" />
    </Link>
  );
};

export default FloatingWhatsApp;
