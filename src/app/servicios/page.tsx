import { PageHeader } from '@/components/shared/page-header';
import { services, methodology } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        title="Servicios de Consultoría"
        description="Soluciones integrales para llevar la calidad y eficiencia de su empresa al siguiente nivel."
      />
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col border-transparent bg-card/40 transition-all hover:bg-card hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-8 ring-primary/5">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{service.longDescription}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="my-16 h-px w-full bg-border" />

          {/* Methodology Section */}
          <section className="space-y-12">
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
          </section>
        </div>
      </div>
    </>
  );
}
