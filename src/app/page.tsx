import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Star, Award, BarChart, Users, Zap } from 'lucide-react';
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
  const statIcons = [BarChart, Award, Users, Zap];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 md:py-40">
        <div className="absolute inset-0 -z-10 bg-grid-slate-900/[0.04] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"></div>
        <div className="container mx-auto grid grid-cols-1 items-center gap-16 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-6">
            <Badge variant="secondary" className="py-1.5 px-4 text-sm">
              Consultor Senior QA/QC
            </Badge>
            <h1 className="font-headline text-5xl font-extrabold tracking-tight lg:text-6xl lg:leading-tight">
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
          <div className="relative flex justify-center">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/70 to-primary/40 opacity-75 blur-2xl"></div>
            <Image
              src="/foto-profesional.png"
              alt="Foto de perfil de Sady Enrique Maureria Ferrada"
              width={450}
              height={450}
              className="relative rounded-3xl object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-card/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 divide-x divide-border/70 md:grid-cols-4">
            {profile.stats.map((stat, index) => {
              const Icon = statIcons[index];
              return(
              <div key={index} className="p-6 text-center space-y-2">
                <Icon className="mx-auto h-8 w-8 text-primary" />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto space-y-16 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Servicios de Consultoría</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Soluciones expertas para optimizar la calidad, la productividad y los costos en sus proyectos.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <Card key={index} className="flex flex-col border-transparent bg-card/40 transition-all hover:bg-card hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-8 ring-primary/5">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 h-auto font-semibold">
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
      <section className="bg-card/50 py-20 sm:py-24">
        <div className="container mx-auto space-y-16 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Metodología de Trabajo</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Un enfoque estructurado en 4 pasos para garantizar resultados medibles y sostenibles.
            </p>
          </div>
          <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute top-10 left-0 hidden w-full border-t-2 border-dashed border-border lg:block" />
            {methodology.map((step, index) => (
              <div key={index} className="relative text-center p-4 rounded-lg">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-background ring-4 ring-primary/10">
                  <span className="font-headline text-3xl font-bold text-primary">{`0${step.step}`}</span>
                </div>
                <h3 className="text-xl font-semibold font-headline">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto space-y-16 px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">Lo que dicen mis clientes</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Testimonios reales de profesionales y empresas que han confiado en mi experiencia.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="bg-card/40 border-border/50 flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-foreground/90">"{testimonial.review}"</p>
                </CardContent>
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
      <section className="bg-gradient-to-r from-primary/90 to-primary">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-16 text-center md:flex-row md:px-6 md:text-left">
          <div className="max-w-3xl">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary-foreground">¿Listo para optimizar sus procesos?</h2>
            <p className="mt-2 text-lg text-primary-foreground/80">
              Hablemos de cómo puedo ayudar a su empresa a alcanzar nuevos niveles de calidad y eficiencia.
            </p>
          </div>
          <Button asChild size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 flex-shrink-0">
            <Link href="/contacto">
              Contactar Ahora <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
