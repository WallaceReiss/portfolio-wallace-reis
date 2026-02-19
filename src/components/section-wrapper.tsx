
'use client';

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { motion } from 'framer-motion';

const frameVariants = {
  hidden: { 
    boxShadow: 'inset 0 0 0 0px hsla(var(--accent) / 0)',
    borderColor: 'hsla(var(--white) / 0)',
  },
  visible: { 
    boxShadow: 'inset 0 0 0 1px hsla(var(--accent) / 0.3)',
    borderColor: 'hsla(var(--accent) / 0.1)',
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  },
};

export const SectionWrapper = ({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <motion.section
      id={id}
      className={cn("w-full py-16 md:py-24 relative border-y border-transparent transition-all", className)}
      variants={frameVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">{children}</div>
    </motion.section>
  );
};
