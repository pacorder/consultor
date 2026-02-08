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
              <Card key={index} className="flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Metodología de Trabajo</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Un enfoque estructurado en 4 pasos para garantizar resultados medibles y sostenibles.
              </p>
            </div>
            <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div className="absolute top-8 left-0 hidden w-full border-t-2 border-dashed border-border lg:block" />
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
          </section>
        </div>
      </div>
    </>
  );
}
