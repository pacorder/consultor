import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { services, caseStudies, testimonials, methodology, blogPosts, profile } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const caseStudyImages = {
  '1': PlaceHolderImages.find(p => p.id === 'case-study-1'),
  '2': PlaceHolderImages.find(p => p.id === 'case-study-2'),
  '3': PlaceHolderImages.find(p => p.id === 'case-study-3'),
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-card py-20 sm:py-32">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-6">
            <Badge variant="outline" className="py-1 px-3">
              Consultor Senior QA/QC
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-snug">
              {profile.name}
            </h1>
            <p className="max-w-prose text-lg text-muted-foreground">
              {profile.summary}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contacto">
                  Agendar Asesoría <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/servicios">Ver Servicios</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/foto-profesional.jpg"
              alt="Sady Enrique Maureria Ferrada"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 divide-x divide-border border-x border-b md:grid-cols-4">
            {profile.stats.map((stat, index) => (
              <div key={index} className="p-6 text-center">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto space-y-12 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Servicios de Consultoría</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Soluciones expertas para optimizar la calidad, la productividad y los costos en sus proyectos.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <Link href="/servicios">
                      Saber más <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="bg-card py-20 sm:py-24">
        <div className="container mx-auto space-y-12 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Metodología de Trabajo</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Un enfoque estructurado en 4 pasos para garantizar resultados medibles y sostenibles.
            </p>
          </div>
          <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-1/2 left-0 hidden w-full -translate-y-1/2 border-t-2 border-dashed border-border lg:block" />
            {methodology.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-background ring-8 ring-background">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto space-y-12 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lo que dicen mis clientes</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Testimonios reales de profesionales y empresas que han confiado en mi experiencia.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index}>
                <CardHeader className="space-y-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-base font-normal leading-relaxed">"{testimonial.review}"</CardTitle>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-16 text-center md:flex-row md:px-6 md:text-left">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight">¿Listo para optimizar sus procesos?</h2>
            <p className="mt-2 text-lg text-primary-foreground/80">
              Hablemos de cómo puedo ayudar a su empresa a alcanzar nuevos niveles de calidad y eficiencia.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contacto">
              Contactar Ahora <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
