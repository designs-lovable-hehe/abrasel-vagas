import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PortalSidebar } from '@/components/PortalSidebar';
import { 
  Briefcase, 
  Plus,
  Search,
  MapPin,
  Clock,
  DollarSign,
  Edit,
  Trash2,
  Eye,
  Users
} from 'lucide-react';

// Mock data for jobs
const mockJobs = [
  {
    id: '1',
    title: 'Chefe de Cozinha',
    type: 'chefe-cozinha',
    location: 'São Paulo, SP',
    salary: 'R$ 3.500 - R$ 5.500',
    contract: 'CLT',
    experience: 'Sênior',
    description: 'Procuramos um chefe de cozinha experiente para liderar nossa equipe culinária e desenvolver cardápios inovadores.',
    requirements: ['Experiência em cozinha profissional', 'Liderança de equipe', 'Criatividade culinária', 'Controle de custos'],
    createdAt: '2024-01-10T08:00:00Z',
    status: 'active',
    applicationsCount: 15
  },
  {
    id: '2',
    title: 'Gerente de Restaurante',
    type: 'gerente',
    location: 'Rio de Janeiro, RJ',
    salary: 'R$ 5.000 - R$ 8.000',
    contract: 'CLT',
    experience: 'Sênior',
    description: 'Buscamos gerente para coordenar operações do restaurante, liderar equipes e garantir excelência no atendimento.',
    requirements: ['Experiência em gestão', 'Liderança', 'Conhecimento do setor gastronômico', 'Controle operacional'],
    createdAt: '2024-01-08T10:30:00Z',
    status: 'active',
    applicationsCount: 23
  },
  {
    id: '3',
    title: 'Cozinheiro',
    type: 'cozinheiro',
    location: 'Belo Horizonte, MG',
    salary: 'R$ 2.200 - R$ 3.500',
    contract: 'CLT',
    experience: 'Pleno',
    description: 'Cozinheiro para atuar em restaurante de alta gastronomia, preparando pratos com qualidade e agilidade.',
    requirements: ['Técnicas culinárias', 'Organização', 'Trabalho em equipe', 'Higiene e segurança'],
    createdAt: '2024-01-05T14:15:00Z',
    status: 'active',
    applicationsCount: 31
  },
  {
    id: '4',
    title: 'Mestre de Cozinha',
    type: 'mestre',
    location: 'São Paulo, SP',
    salary: 'R$ 4.000 - R$ 6.500',
    contract: 'CLT',
    experience: 'Sênior',
    description: 'Mestre de cozinha para supervisionar operações culinárias e treinar equipe em restaurante premium.',
    requirements: ['Vasta experiência culinária', 'Capacidade de ensino', 'Liderança', 'Inovação gastronômica'],
    createdAt: '2024-01-03T09:45:00Z',
    status: 'paused',
    applicationsCount: 8
  },
  {
    id: '5',
    title: 'Auxiliar Administrativo',
    type: 'auxiliar-adm',
    location: 'Salvador, BA',
    salary: 'R$ 1.800 - R$ 2.500',
    contract: 'CLT',
    experience: 'Júnior',
    description: 'Auxiliar administrativo para apoiar rotinas administrativas de rede de restaurantes.',
    requirements: ['Conhecimentos em informática', 'Organização', 'Comunicação', 'Proatividade'],
    createdAt: '2024-01-01T16:00:00Z',
    status: 'active',
    applicationsCount: 12
  }
];

const jobTypes = {
  'auxiliar-adm': 'Auxiliar Administrativo',
  'mestre': 'Mestre de Cozinha', 
  'gerente': 'Gerente de Restaurante',
  'servicos-gerais': 'Serviços Gerais',
  'cozinheiro': 'Cozinheiro',
  'chefe-cozinha': 'Chefe de Cozinha'
};

const statusMap = {
  active: { label: 'Ativa', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  paused: { label: 'Pausada', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
  closed: { label: 'Fechada', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' }
};

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || job.type === filterType;
    const matchesStatus = filterStatus === 'all' || job.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalJobs = mockJobs.length;
  const activeJobs = mockJobs.filter(job => job.status === 'active').length;
  const totalApplications = mockJobs.reduce((sum, job) => sum + job.applicationsCount, 0);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

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
                  <h1 className="text-2xl font-bold text-foreground">Vagas</h1>
                  <p className="text-sm text-muted-foreground">Gerencie as vagas disponíveis</p>
                </div>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nova Vaga
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total de Vagas</p>
                      <p className="text-2xl font-bold text-foreground">{totalJobs}</p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Vagas Ativas</p>
                      <p className="text-2xl font-bold text-foreground">{activeJobs}</p>
                    </div>
                    <div className="bg-green-500/10 p-3 rounded-full">
                      <Briefcase className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Candidaturas</p>
                      <p className="text-2xl font-bold text-foreground">{totalApplications}</p>
                    </div>
                    <div className="bg-blue-500/10 p-3 rounded-full">
                      <Users className="h-5 w-5 text-blue-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Jobs List */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Lista de Vagas</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {filteredJobs.length} de {totalJobs} vagas
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
                        placeholder="Título ou localização..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Tipo</label>
                    <Select value={filterType} onValueChange={setFilterType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Todos os tipos" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos os tipos</SelectItem>
                        {Object.entries(jobTypes).map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value}
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
                      <SelectContent>
                        <SelectItem value="all">Todos os status</SelectItem>
                        <SelectItem value="active">Ativa</SelectItem>
                        <SelectItem value="paused">Pausada</SelectItem>
                        <SelectItem value="closed">Fechada</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredJobs.map((job) => (
                    <Card key={job.id} className="hover:shadow-medium transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-foreground mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <Badge variant="secondary">{jobTypes[job.type as keyof typeof jobTypes]}</Badge>
                              <Badge className={statusMap[job.status as keyof typeof statusMap].color}>
                                {statusMap[job.status as keyof typeof statusMap].label}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <DollarSign className="h-4 w-4 mr-2" />
                            {job.salary}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-2" />
                            Criada em {formatDate(job.createdAt)}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="h-4 w-4 mr-2" />
                            {job.applicationsCount} candidaturas
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap gap-1">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                          {job.requirements.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{job.requirements.length - 3} mais
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredJobs.length === 0 && (
                  <div className="text-center py-8">
                    <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Nenhuma vaga encontrada com os filtros aplicados.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}