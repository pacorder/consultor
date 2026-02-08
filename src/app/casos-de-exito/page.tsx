import Image from 'next/image';
import { PageHeader } from '@/components/shared/page-header';
import { caseStudies } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CasosDeExitoPage() {
  const getImageForCase = (id: string) => {
    return PlaceHolderImages.find(p => p.id === `case-study-${id}`);
  }

  return (
    <>
      <PageHeader
        title="Casos de Éxito"
        description="Resultados reales que demuestran el impacto de una gestión de calidad estratégica."
      />
      <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <div className="space-y-16">
          {caseStudies.map((study, index) => {
            const image = getImageForCase(study.id);
            return (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl">{study.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 mt-4 space-y-4">
                      <div>
                        <h3 className="font-semibold">El Problema</h3>
                        <p className="text-muted-foreground">{study.problem}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">La Solución</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">El Resultado</h3>
                        <p className="text-muted-foreground">{study.result}</p>
                      </div>
                      <Badge variant="default" className="text-base py-2 px-4">
                        ROI: {study.roi}
                      </Badge>
                    </CardContent>
                  </div>
                  {image && (
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
