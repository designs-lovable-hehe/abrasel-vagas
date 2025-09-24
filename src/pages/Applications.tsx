import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PortalSidebar } from '@/components/PortalSidebar';
import { ApplicationsTable } from '@/components/ApplicationsTable';
import { 
  Users, 
  Search, 
  Filter, 
  Download,
  Eye,
  Mail,
  Phone
} from 'lucide-react';

// Mock data for applications
const mockApplications = [
  {
    id: '1',
    name: 'Maria Silva',
    email: 'maria.silva@email.com',
    phone: '(11) 99999-1234',
    jobType: 'cozinheiro',
    jobTitle: 'Cozinheiro',
    appliedAt: '2024-01-15T10:30:00Z',
    status: 'pending',
    experience: 'Cozinheira com 3 anos de experiência em restaurantes, especializada em culinária brasileira e italiana.',
    motivation: 'Tenho paixão por culinária e busco crescer profissionalmente em uma empresa do setor gastronômico.',
    portfolio: 'https://maria-portfolio.com'
  },
  {
    id: '2',
    name: 'João Santos',
    email: 'joao.santos@email.com',
    phone: '(11) 88888-5678',
    jobType: 'auxiliar-adm',
    jobTitle: 'Auxiliar Administrativo',
    appliedAt: '2024-01-14T16:45:00Z',
    status: 'reviewed',
    experience: 'Auxiliar administrativo com experiência em rotinas de escritório, controle de estoque e atendimento ao cliente.',
    motivation: 'Busco uma oportunidade de crescer no setor administrativo de bares e restaurantes.',
    portfolio: 'https://github.com/joaosantos'
  },
  {
    id: '3',
    name: 'Ana Costa',
    email: 'ana.costa@email.com',
    phone: '(11) 77777-9012',
    jobType: 'gerente',
    jobTitle: 'Gerente de Restaurante',
    appliedAt: '2024-01-13T09:15:00Z',
    status: 'approved',
    experience: 'Gerente com 5 anos de experiência em operações de restaurantes, liderança de equipes e controle de custos.',
    motivation: 'Adoro liderar equipes e garantir a melhor experiência para os clientes em restaurantes.',
    portfolio: 'https://ana-portfolio.com'
  },
  {
    id: '4',
    name: 'Pedro Oliveira',
    email: 'pedro.oliveira@email.com',
    phone: '(11) 66666-3456',
    jobType: 'chefe-cozinha',
    jobTitle: 'Chefe de Cozinha',
    appliedAt: '2024-01-12T14:20:00Z',
    status: 'pending',
    experience: 'Chef com 8 anos de experiência, especializado em culinária contemporânea e gestão de cozinha profissional.',
    motivation: 'Busco liderar uma cozinha de alto padrão e desenvolver cardápios inovadores.',
    portfolio: 'https://pedro-chef.com'
  },
  {
    id: '5',
    name: 'Carla Mendes',
    email: 'carla.mendes@email.com',
    phone: '(11) 55555-7890',
    jobType: 'servicos-gerais',
    jobTitle: 'Serviços Gerais',
    appliedAt: '2024-01-11T11:30:00Z',
    status: 'rejected',
    experience: 'Auxiliar de serviços gerais com experiência em limpeza e organização de restaurantes.',
    motivation: 'Tenho dedicação ao trabalho e busco contribuir para manter ambientes limpos e organizados.',
    portfolio: 'https://carla-cv.com'
  }
];

const jobTypes = [
  { id: 'auxiliar-adm', title: 'Auxiliar Administrativo' },
  { id: 'mestre', title: 'Mestre de Cozinha' },
  { id: 'gerente', title: 'Gerente de Restaurante' },
  { id: 'servicos-gerais', title: 'Serviços Gerais' },
  { id: 'cozinheiro', title: 'Cozinheiro' },
  { id: 'chefe-cozinha', title: 'Chefe de Cozinha' }
];

const statusMap = {
  pending: { label: 'Pendente', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
  reviewed: { label: 'Em análise', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  approved: { label: 'Aprovado', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  rejected: { label: 'Rejeitado', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' }
};

export default function Applications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterJob, setFilterJob] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredApplications = mockApplications.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesJob = filterJob === 'all' || app.jobType === filterJob;
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus;
    
    return matchesSearch && matchesJob && matchesStatus;
  });

  const totalApplications = mockApplications.length;
  const pendingCount = mockApplications.filter(app => app.status === 'pending').length;
  const reviewedCount = mockApplications.filter(app => app.status === 'reviewed').length;
  const approvedCount = mockApplications.filter(app => app.status === 'approved').length;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-subtle">
        <PortalSidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-card shadow-soft border-b border-border">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="text-muted-foreground" />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Candidaturas</h1>
                  <p className="text-sm text-muted-foreground">Gerencie todas as candidaturas recebidas</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total</p>
                      <p className="text-2xl font-bold text-foreground">{totalApplications}</p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pendentes</p>
                      <p className="text-2xl font-bold text-foreground">{pendingCount}</p>
                    </div>
                    <div className="bg-yellow-500/10 p-3 rounded-full">
                      <Eye className="h-5 w-5 text-yellow-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Em Análise</p>
                      <p className="text-2xl font-bold text-foreground">{reviewedCount}</p>
                    </div>
                    <div className="bg-blue-500/10 p-3 rounded-full">
                      <Search className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Aprovados</p>
                      <p className="text-2xl font-bold text-foreground">{approvedCount}</p>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-full">
                      <Users className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Applications Table */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Filter className="h-5 w-5" />
                    <span>Lista de Candidaturas</span>
                  </div>
                  <span className="text-sm font-normal text-muted-foreground">
                    {filteredApplications.length} de {totalApplications}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Pesquisar</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Nome ou email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Tipo de Vaga</label>
                    <Select value={filterJob} onValueChange={setFilterJob}>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas as vagas" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border border-border">
                        <SelectItem value="all">Todas as vagas</SelectItem>
                        {jobTypes.map(job => (
                          <SelectItem key={job.id} value={job.id}>
                            {job.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Status</label>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger>
                        <SelectValue placeholder="Todos os status" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border border-border">
                        <SelectItem value="all">Todos os status</SelectItem>
                        <SelectItem value="pending">Pendente</SelectItem>
                        <SelectItem value="reviewed">Em análise</SelectItem>
                        <SelectItem value="approved">Aprovado</SelectItem>
                        <SelectItem value="rejected">Rejeitado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <ApplicationsTable applications={filteredApplications} />
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}