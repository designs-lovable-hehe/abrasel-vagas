import Header from '@/components/Header';
import JobApplicationForm from '@/components/JobApplicationForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main className="container mx-auto py-4 md:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <section className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Trabalhe com a Abrasel
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Faça parte da maior associação de bares e restaurantes do Brasil. 
              Encontre oportunidades incríveis no setor gastronômico.
            </p>
          </section>
          <JobApplicationForm />
        </div>
      </main>
    </div>
  );
};

export default Index;
