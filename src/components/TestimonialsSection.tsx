import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Carlos Oliveira',
      position: 'Vendedor',
      comment: 'A EmpregosBR me deu a oportunidade de crescer profissionalmente. Ambiente excelente e equipe incrível!',
      initials: 'CO'
    },
    {
      name: 'Fernanda Lima',
      position: 'Analista',
      comment: 'Aqui encontrei não apenas um emprego, mas uma carreira. Os benefícios e oportunidades são únicos.',
      initials: 'FL'
    },
    {
      name: 'Ricardo Santos',
      position: 'Supervisor',
      comment: 'Trabalhar na EmpregosBR é estar em uma empresa que realmente valoriza seus funcionários.',
      initials: 'RS'
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            O que nossos colaboradores dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Depoimentos reais de quem faz parte da nossa equipe
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-soft hover-scale animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}