"use client";

import Image from 'next/image';
import { useState } from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { hobbyDetails } from '@/lib/data';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const HobbiesSection = () => {
  const [openHobby, setOpenHobby] = useState<string | null>(null);

  const hobbyImages = hobbyDetails.map(hobby => {
    const placeholder = PlaceHolderImages.find(p => p.id === hobby.imageId);
    return {
      ...hobby,
      imageUrl: placeholder?.imageUrl,
      imageHint: placeholder?.imageHint,
      description: placeholder?.description,
    };
  });

  const toggleHobby = (title: string) => {
    setOpenHobby(prev => (prev === title ? null : title));
  };

  return (
    <SectionWrapper id="hobbies" className="bg-background">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">Hobbies</h2>
        <p className="mt-4 text-lg text-muted-foreground">Coisas que gosto de fazer no meu tempo livre.</p>
      </div>
      <div className="mt-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {hobbyImages.map((hobby) => (
              <Collapsible key={hobby.title} open={openHobby === hobby.title} onOpenChange={() => toggleHobby(hobby.title)} className="w-full">
                 <CollapsibleTrigger asChild>
                    <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 w-full">
                      <CardHeader className="p-0">
                        {hobby.imageUrl && (
                          <div className="relative aspect-video w-full">
                            <Image
                              src={hobby.imageUrl}
                              alt={hobby.description || hobby.title}
                              fill
                              className="object-cover"
                              data-ai-hint={hobby.imageHint}
                            />
                          </div>
                        )}
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="text-lg text-center flex items-center justify-center gap-2">
                            {hobby.title}
                            <ChevronDown className={cn('h-5 w-5 transition-transform duration-300', openHobby === hobby.title && 'rotate-180')} />
                        </CardTitle>
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                      {hobby.gallery.map((imgId) => {
                          const img = PlaceHolderImages.find(p => p.id === imgId);
                          if (!img) return null;
                          return (
                              <div key={img.id} className="relative aspect-square rounded-lg overflow-hidden group">
                                  <Image 
                                      src={img.imageUrl}
                                      alt={img.description}
                                      fill
                                      className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                                      data-ai-hint={img.imageHint}
                                  />
                              </div>
                          )
                      })}
                    </div>
                  </CollapsibleContent>
              </Collapsible>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HobbiesSection;
