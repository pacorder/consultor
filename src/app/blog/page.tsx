import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/shared/page-header';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
    const getImageForPost = (slug: string) => {
        const postMap: { [key: string]: string } = {
            '5-claves-para-una-gestion-de-calidad-exitosa': 'blog-1',
            'lean-manufacturing-mas-alla-de-la-fabrica': 'blog-2',
            'el-rol-del-qa-qc-en-la-era-de-la-industria-4-0': 'blog-3'
        };
        return PlaceHolderImages.find(p => p.id === postMap[slug]);
    };

    return (
        <>
            <PageHeader
                title="Blog"
                description="Artículos, análisis y reflexiones sobre calidad, productividad y tendencias de la industria."
            />
            <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => {
                        const image = getImageForPost(post.slug);
                        return (
                            <Card key={post.slug} className="flex flex-col overflow-hidden bg-card/40 border-border/50 transition-all hover:border-primary/30">
                                {image && (
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={image.imageUrl}
                                            alt={image.description}
                                            data-ai-hint={image.imageHint}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <CardHeader>
                                    <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                                    <CardTitle className="pt-2 font-headline">{post.title}</CardTitle>
                                    <CardDescription>{post.date} por {post.author}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{post.excerpt}</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="link" asChild className="p-0 font-semibold">
                                        <Link href="#">
                                            Leer más <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
