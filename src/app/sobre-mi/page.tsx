import Image from 'next/image';
import { PageHeader } from '@/components/shared/page-header';
import { profile, certifications, specializations } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Briefcase } from 'lucide-react';

export default function SobreMiPage() {
  const sadyProfileImage = PlaceHolderImages.find(p => p.id === 'sady-profile');

  return (
    <>
      <PageHeader
        title="Sobre Mí"
        description="Una trayectoria dedicada a la excelencia y la mejora continua."
      />

      <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-16 md:grid-cols-3">
          <div className="flex flex-col items-center text-center md:col-span-1">
            {sadyProfileImage && (
              <Image
                src={sadyProfileImage.imageUrl}
                alt={sadyProfileImage.description}
                data-ai-hint={sadyProfileImage.imageHint}
                width={250}
                height={250}
                className="rounded-full object-cover shadow-lg"
              />
            )}
            <h2 className="mt-6 text-2xl font-bold">{profile.name}</h2>
            <p className="mt-1 text-muted-foreground">{profile.role}</p>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground md:col-span-2">
            {profile.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="my-16 h-px w-full bg-border" />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Certifications Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Award className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Certificaciones y Formación</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{cert.title}</CardTitle>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <Badge variant="secondary">{cert.year}</Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Specializations Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Briefcase className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Áreas de Especialización</h2>
            </div>
            <div className="space-y-4">
              {specializations.map((spec, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{spec.area}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{spec.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
