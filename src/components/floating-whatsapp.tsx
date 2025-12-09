"use client";

import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa';

interface FloatingWhatsappProps {
    phoneNumber: string;
}

const FloatingWhatsapp = ({ phoneNumber }: FloatingWhatsappProps) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <Link 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 transition-colors duration-300"
            aria-label="Contact me on WhatsApp"
        >
            <FaWhatsapp className="h-8 w-8" />
        </Link>
    );
}

export default FloatingWhatsapp;
