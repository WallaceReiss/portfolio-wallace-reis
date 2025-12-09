import { SectionWrapper } from '@/components/section-wrapper';
import { awards } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const AwardsSection = () => {
    return (
        <SectionWrapper id="awards">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">Prêmios e Reconhecimentos</h2>
                <p className="mt-4 text-lg text-muted-foreground">Algumas das minhas conquistas profissionais.</p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-2 justify-center">
                {awards.map((award, index) => (
                    <Card key={index} className="flex flex-col max-w-lg mx-auto">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <award.icon className="h-10 w-10 text-primary" />
                            <div>
                                <CardTitle>{award.title}</CardTitle>
                                <CardDescription>{award.year}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{award.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default AwardsSection;
