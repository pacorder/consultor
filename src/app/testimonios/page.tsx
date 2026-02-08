import { PageHeader } from '@/components/shared/page-header';
import { testimonials } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'
        }`}
      />
    ))}
  </div>
);

export default function TestimoniosPage() {
  return (
    <>
      <PageHeader
        title="Lo que dicen mis clientes"
        description="Testimonios reales de profesionales y empresas que han confiado en mi experiencia."
      />
      <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="flex-grow">
                <StarRating rating={testimonial.rating} />
                <CardTitle className="pt-4 text-lg font-normal leading-relaxed">
                  "{testimonial.review}"
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${testimonial.name}`} alt={testimonial.name} />
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
    </>
  );
}
