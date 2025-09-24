import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { ChefHat, User, Mail, Phone, FileText, CheckCircle, Star, Send } from 'lucide-react';
import JobCard from '@/components/JobCard';
import CompanySection from '@/components/CompanySection';
import TestimonialsSection from '@/components/TestimonialsSection';

// Import das imagens
import auxiliarAdmImage from '@/assets/auxiliar-administrativo.jpg';
import mestreCozinhaImage from '@/assets/mestre-cozinha.jpg';
import gerenteRestauranteImage from '@/assets/gerente-restaurante.jpg';
import servicosGeraisImage from '@/assets/servicos-gerais.jpg';
import cozinheiroImage from '@/assets/cozinheiro.jpg';
import chefeCozinhaImage from '@/assets/chefe-cozinha.jpg';
import restaurantHeroImage from '@/assets/restaurant-hero.jpg';

const jobTypes = [
  { 
    id: 'auxiliar-adm', 
    title: 'Auxiliar Administrativo', 
    description: 'Oportunidade para auxiliar administrativo em bares e restaurantes. Experiência com rotinas administrativas, controle de estoque e atendimento.',
    image: auxiliarAdmImage,
    company: 'Abrasel',
    location: 'São Paulo, SP',
    salary: 'R$ 1.800 - R$ 2.500',
    type: 'CLT',
    benefits: ['Vale Alimentação', 'Plano de Saúde', 'Vale Transporte', 'Treinamentos']
  },
  { 
    id: 'mestre', 
    title: 'Mestre de Cozinha', 
    description: 'Vaga para mestre de cozinha experiente. Lidere equipes culinárias e desenvolva cardápios excepcionais em restaurantes de alto padrão.',
    image: mestreCozinhaImage,
    company: 'Abrasel',
    location: 'São Paulo, SP',
    salary: 'R$ 4.000 - R$ 6.500',
    type: 'CLT',
    benefits: ['Participação Lucros', 'Plano de Saúde Premium', 'Crescimento', 'Liderança']
  },
  { 
    id: 'gerente', 
    title: 'Gerente de Restaurante', 
    description: 'Posição de gerência para profissional experiente no setor gastronômico. Gerencie operações, equipes e garanta excelência no atendimento.',
    image: gerenteRestauranteImage,
    company: 'Abrasel',
    location: 'São Paulo, SP',
    salary: 'R$ 5.000 - R$ 8.000',
    type: 'CLT',
    benefits: ['Carro da Empresa', 'Plano Executivo', 'Participação Lucros', 'Bonificações']
  },
  { 
    id: 'servicos-gerais', 
    title: 'Serviços Gerais', 
    description: 'Oportunidade para auxiliar de serviços gerais em bares e restaurantes. Ambiente respeitoso com foco na qualidade e higiene.',
    image: servicosGeraisImage,
    company: 'Abrasel',
    location: 'São Paulo, SP',
    salary: 'R$ 1.400 - R$ 2.000',
    type: 'CLT',
    benefits: ['Vale Alimentação', 'Uniforme', 'Vale Transporte', 'Estabilidade']
  },
  { 
    id: 'cozinheiro', 
    title: 'Cozinheiro', 
    description: 'Vaga para cozinheiro em restaurantes e bares. Prepare pratos deliciosos e trabalhe em cozinha profissional com equipamentos modernos.',
    image: cozinheiroImage,
    company: 'Abrasel',
    location: 'São Paulo, SP',
    salary: 'R$ 2.200 - R$ 3.500',
    type: 'CLT',
    benefits: ['Vale Alimentação', 'Plano de Saúde', 'Adicional Noturno', 'Capacitação']
  },
  { 
    id: 'chefe-cozinha', 
    title: 'Chefe de Cozinha', 
    description: 'Posição de liderança culinária para chef experiente. Coordene a cozinha, desenvolva cardápios e mantenha os mais altos padrões gastronômicos.',
    image: chefeCozinhaImage,
    company: 'Abrasel',
    location: 'São Paulo, SP',
    salary: 'R$ 3.500 - R$ 5.500',
    type: 'CLT',
    benefits: ['Plano de Saúde Premium', 'Participação Lucros', 'Cursos', 'Crescimento']
  }
];

interface FormData {
  jobType: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  motivation: string;
  portfolio: string;
}

export default function JobApplicationForm() {
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    jobType: '',
    name: '',
    email: '',
    phone: '',
    experience: '',
    motivation: '',
    portfolio: ''
  });

  const handleJobSelect = (jobId: string) => {
    setSelectedJob(jobId);
    setFormData(prev => ({ ...prev, jobType: jobId }));
    setIsModalOpen(true);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.jobType || !formData.name || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Candidatura enviada!",
      description: "Sua candidatura foi enviada com sucesso. Entraremos em contato em breve.",
    });

    // Reset form
    setFormData({
      jobType: '',
      name: '',
      email: '',
      phone: '',
      experience: '',
      motivation: '',
      portfolio: ''
    });
    setSelectedJob('');
    setIsModalOpen(false);
  };

  return (
    <div className="bg-background">

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={restaurantHeroImage} 
            alt="Ambiente profissional de cozinha gastronômica" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Oportunidades no
              <span className="text-transparent bg-clip-text bg-gradient-abrasel block sm:inline"> setor gastronômico</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
              A Abrasel conecta talentos às melhores oportunidades em bares e restaurantes. 
              Encontre sua próxima oportunidade profissional conosco.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 text-white/80 px-4">
              <div className="flex items-center justify-center space-x-2 bg-black/20 rounded-lg px-3 py-2">
                <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-abrasel-green flex-shrink-0" />
                <span className="text-sm md:text-base">Vagas exclusivas</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-black/20 rounded-lg px-3 py-2">
                <Star className="h-4 w-4 md:h-5 md:w-5 text-abrasel-orange flex-shrink-0" />
                <span className="text-sm md:text-base">Empresas associadas</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-black/20 rounded-lg px-3 py-2">
                <User className="h-4 w-4 md:h-5 md:w-5 text-abrasel-blue flex-shrink-0" />
                <span className="text-sm md:text-base">Mentoria profissional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Job Selection */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Oportunidades Disponíveis
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 px-4">
              Clique no botão "Aplicar para Vaga" na oportunidade que mais combina com seu perfil
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {jobTypes.map((job, index) => (
              <div key={job.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <JobCard 
                  {...job}
                  isSelected={selectedJob === job.id}
                  onClick={() => handleJobSelect(job.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal do Formulário de Candidatura */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto m-4 w-[calc(100vw-2rem)] sm:w-full">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2 text-lg md:text-xl pr-8">
                <User className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
                <span className="break-words">Candidatura para: {jobTypes.find(job => job.id === selectedJob)?.title}</span>
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 mt-4 md:mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="flex items-center space-x-2 text-sm md:text-base">
                    <User className="h-3 w-3 md:h-4 md:w-4" />
                    <span>Nome completo *</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Seu nome completo"
                    required
                    className="mt-1 text-sm md:text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center space-x-2 text-sm md:text-base">
                    <Mail className="h-3 w-3 md:h-4 md:w-4" />
                    <span>Email *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="mt-1 text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="flex items-center space-x-2 text-sm md:text-base">
                    <Phone className="h-3 w-3 md:h-4 md:w-4" />
                    <span>Telefone</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="mt-1 text-sm md:text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="portfolio" className="flex items-center space-x-2 text-sm md:text-base">
                    <FileText className="h-3 w-3 md:h-4 md:w-4" />
                    <span>Portfolio/LinkedIn</span>
                  </Label>
                  <Input
                    id="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange('portfolio', e.target.value)}
                    placeholder="https://seu-portfolio.com"
                    className="mt-1 text-sm md:text-base"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="experience" className="text-sm md:text-base">Experiência profissional</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  placeholder="Descreva sua experiência relevante para esta vaga..."
                  rows={4}
                  className="mt-1 text-sm md:text-base resize-none"
                />
              </div>

              <div>
                <Label htmlFor="motivation" className="text-sm md:text-base">Por que você quer trabalhar conosco?</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  placeholder="Conte-nos sua motivação..."
                  rows={3}
                  className="mt-1 text-sm md:text-base resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 text-sm md:text-base h-10 md:h-11"
                >
                  Cancelar
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-gradient-primary hover:shadow-medium transition-all duration-300 text-sm md:text-base h-10 md:h-11"
                >
                  <Send className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                  Enviar Candidatura
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Company Section */}
      <CompanySection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}