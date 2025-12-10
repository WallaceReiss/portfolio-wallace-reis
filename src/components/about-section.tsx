import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
    return (
        <SectionWrapper id="about" className="bg-background">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">About me</h2>
            </div>
            <div className="mt-12 max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
                <Card className="flex flex-col">
                    <CardContent className="p-6 md:p-8 text-lg text-muted-foreground flex-1">
                        <p className="text-justify">
                            I am Wallace Reis Oliveira, a Full Stack Developer passionate about building modern, scalable, and intelligent solutions. I work with a comprehensive ecosystem of technologies, contributing to everything from backend architecture to high-performance web interfaces.

                            I have solid experience with Node.js, NestJS, Express, TypeScript, PrismaORM, TypeORM, PostgreSQL, REST APIs, Swagger, and containerization using Docker. On the frontend, I am proficient in Angular, React, Next.js, SCSS, HTML, CSS, and advanced componentization practices.

                            Additionally, I have expertise in Google Cloud, applying best practices in infrastructure, deployment, scalability, monitoring, and the broader GCP ecosystem. My background also includes experience with AWS, Linux environments, version control with Git/GitHub, testing with Jest and Cypress, agile methodologies (Kanban, Scrum), and tools such as Jira, Trello, Miro, and Notion.</p>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardContent className="p-6 md:p-8 text-lg text-muted-foreground flex-1">
                        <p className="text-justify mb-4">
                            But who I am goes beyond technology. I am an extroverted, light-hearted, and positive person who moves through life with a smile and tries to bring humor, warmth, and good energy wherever I go. I enjoy connecting with people, value genuine friendships, and believe that life is built in the small moments we share with those we love. I am passionate about nature, outdoor adventures, hiking, traveling, animals, and experiences that remind us of what truly matters. I believe that good energy attracts good paths—and I apply this mindset both in my personal life and in the way I work.

                            In code, I seek clarity, scalability, and purpose. In life, I seek connection, lightness, and joy. Developing is what I do. But living well is who I am. </p>
                        <p className="text-justify">
                            In code, I seek clarity, scalability, and purpose. In life, I seek connection, lightness, and joy. Developing is what I do. But living well is who I am.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;
