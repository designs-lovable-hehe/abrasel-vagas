import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

export default function CompanySection() {
  const stats = [
    { icon: Users, label: 'Funcionários', value: '500+' },
    { icon: Globe, label: 'Países', value: '15' },
    { icon: Award, label: 'Prêmios', value: '25' },
    { icon: TrendingUp, label: 'Crescimento', value: '30%' }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Sobre a Abrasel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa líder no mercado, comprometida com a excelência e o desenvolvimento 
            profissional de nossos colaboradores.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-soft hover-scale">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Nossa Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Conectar talentos às melhores oportunidades, criando um ambiente de trabalho 
                onde todos possam crescer e alcançar seu potencial máximo.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Nossos Valores
              </h3>
              <div className="space-y-2">
                {['Inovação', 'Transparência', 'Diversidade', 'Excelência'].map((value, index) => (
                  <Badge key={index} variant="outline" className="mr-2">
                    {value}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}