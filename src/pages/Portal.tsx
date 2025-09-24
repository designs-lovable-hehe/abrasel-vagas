import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PortalSidebar } from '@/components/PortalSidebar';
import { ApplicationsTable } from '@/components/ApplicationsTable';
import { 
  Users, 
  Search, 
  Filter, 
  Clock,
  CheckCircle,
  TrendingUp
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
    motivation: 'Tenho paixão por culinária e busco crescer profissionalmente no setor gastronômico.',
    portfolio: 'https://maria-cv.com'
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
    motivation: 'Busco crescer no setor administrativo de bares e restaurantes.',
    portfolio: 'https://joao-curriculo.com'
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
    motivation: 'Adoro liderar equipes e garantir a melhor experiência para os clientes.',
    portfolio: 'https://ana-portfolio.com'
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
  pending: { label: 'Pendente', color: 'bg-yellow-100 text-yellow-800' },
  reviewed: { label: 'Em análise', color: 'bg-blue-100 text-blue-800' },
  approved: { label: 'Aprovado', color: 'bg-green-100 text-green-800' },
  rejected: { label: 'Rejeitado', color: 'bg-red-100 text-red-800' }
};

export default function Portal() {
  useEffect(() => {
    document.title = 'Dashboard - Abrasel Portal';
  }, []);

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
  const pendingApplications = mockApplications.filter(app => app.status === 'pending').length;
  const approvedApplications = mockApplications.filter(app => app.status === 'approved').length;

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
                  <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Gerencie suas candidaturas</p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="shadow-soft border-l-4 border-l-primary">
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
                  <div className="flex items-center mt-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-500">+12%</span>
                    <span className="text-muted-foreground ml-1">vs mês passado</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-l-4 border-l-yellow-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Pendentes</p>
                      <p className="text-2xl font-bold text-foreground">{pendingApplications}</p>
                    </div>
                    <div className="bg-yellow-500/10 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-yellow-500" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="text-muted-foreground">Aguardando análise</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Aprovados</p>
                      <p className="text-2xl font-bold text-foreground">{approvedApplications}</p>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-500">+8%</span>
                    <span className="text-muted-foreground ml-1">vs mês passado</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Taxa Aprovação</p>
                      <p className="text-2xl font-bold text-foreground">
                        {Math.round((approvedApplications / totalApplications) * 100)}%
                      </p>
                    </div>
                    <div className="bg-blue-500/10 p-3 rounded-full">
                      <TrendingUp className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="text-muted-foreground">Meta: 75%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="shadow-soft mb-6">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Filter className="h-5 w-5" />
                    <span>Candidaturas</span>
                  </div>
                  <span className="text-sm font-normal text-muted-foreground">
                    {filteredApplications.length} de {totalApplications}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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