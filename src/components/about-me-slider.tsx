'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useI18n } from '@/i18n';

const AboutMeSlider = () => {
  const personalImages = PlaceHolderImages.filter(p => p.id.startsWith('personal-'));
  const { t } = useI18n();

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <div className="text-center mb-8">
        <h4 className="text-xl font-mono text-accent">{t.footer.aboutMeSlider.title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{t.footer.aboutMeSlider.subtitle}</p>
      </div>
      <div className="relative px-12">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {personalImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="border-white/5 bg-secondary/20 backdrop-blur-sm overflow-hidden group">
                    <CardContent className="relative aspect-[3/4] p-0">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={image.imageHint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default AboutMeSlider;