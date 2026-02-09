import Link from 'next/link';
import { PageHeader } from '@/components/shared/page-header';
import { linkedinPosts } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

export default function PublicacionesPage() {
    return (
        <>
            <PageHeader
                title="Publicaciones"
                description="Reflexiones, análisis y conocimientos compartidos directamente desde mi perfil de LinkedIn."
            />
            <div className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
                <div className="space-y-8">
                    {linkedinPosts.map((post, index) => (
                        <Card key={index} className="flex flex-col bg-background/50 border-border/20 shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-primary/20">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl text-primary">{post.title}</CardTitle>
                                <CardDescription>{post.date}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground text-base">{post.summary}</p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="outline" className="font-semibold border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                                    <Link href={post.url} target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="mr-2 h-4 w-4" />
                                        Ver en LinkedIn
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}
