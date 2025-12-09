import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

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
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6">{children}</div>
    </section>
  );
};
