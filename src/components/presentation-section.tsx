import { SectionWrapper } from '@/components/section-wrapper';

const PresentationSection = () => {
    return (
        <SectionWrapper id="presentation" className="bg-muted/40 dark:bg-card">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">Presentation</h2>
                <p className="mt-4 text-lg text-muted-foreground">Watch a short presentation in English.</p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                     <iframe 
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default PresentationSection;
