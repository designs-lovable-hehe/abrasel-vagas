import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Eye, 
  Mail, 
  Phone, 
  ExternalLink,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

const statusMap = {
  pending: { label: 'Pendente', color: 'bg-yellow-100 text-yellow-800 border-yellow-200', icon: Clock },
  reviewed: { label: 'Em análise', color: 'bg-blue-100 text-blue-800 border-blue-200', icon: Eye },
  approved: { label: 'Aprovado', color: 'bg-green-100 text-green-800 border-green-200', icon: CheckCircle },
  rejected: { label: 'Rejeitado', color: 'bg-red-100 text-red-800 border-red-200', icon: XCircle }
};

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  jobType: string;
  jobTitle: string;
  appliedAt: string;
  status: string;
  experience: string;
  motivation: string;
  portfolio: string;
}

interface ApplicationsTableProps {
  applications: Application[];
}

export function ApplicationsTable({ applications }: ApplicationsTableProps) {
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleStatusChange = (applicationId: string, newStatus: string) => {
    console.log(`Changing status of ${applicationId} to ${newStatus}`);
    // Here you would update the status in your state management or API
  };

  return (
    <>
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-border hover:bg-transparent">
              <TableHead className="font-semibold">Candidato</TableHead>
              <TableHead className="font-semibold">Vaga</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">Data</TableHead>
              <TableHead className="font-semibold text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => {
              const status = statusMap[app.status as keyof typeof statusMap];
              const StatusIcon = status.icon;
              
              return (
                <TableRow key={app.id} className="border-b border-border/50 hover:bg-muted/30">
                  <TableCell>
                    <div>
                      <p className="font-medium text-foreground">{app.name}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center space-x-1">
                          <Mail className="h-3 w-3" />
                          <span>{app.email}</span>
                        </div>
                        {app.phone && (
                          <div className="flex items-center space-x-1">
                            <Phone className="h-3 w-3" />
                            <span>{app.phone}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  
                  <TableCell>
                    <Badge variant="secondary" className="font-medium">
                      {app.jobTitle}
                    </Badge>
                  </TableCell>
                  
                  <TableCell>
                    <Badge className={status.color}>
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {status.label}
                    </Badge>
                  </TableCell>
                  
                  <TableCell>
                    <div className="text-sm">
                      <p className="font-medium">{formatDate(app.appliedAt)}</p>
                      <p className="text-muted-foreground">{formatTime(app.appliedAt)}</p>
                    </div>
                  </TableCell>
                  
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => setSelectedApplication(app)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Detalhes da Candidatura</DialogTitle>
                          </DialogHeader>
                          {selectedApplication && <ApplicationDetails application={selectedApplication} />}
                        </DialogContent>
                      </Dialog>
                      
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-popover border border-border">
                          <DropdownMenuItem onClick={() => handleStatusChange(app.id, 'reviewed')}>
                            <Eye className="h-4 w-4 mr-2" />
                            Marcar como analisado
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(app.id, 'approved')}>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Aprovar
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(app.id, 'rejected')}>
                            <XCircle className="h-4 w-4 mr-2" />
                            Rejeitar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        
        {applications.length === 0 && (
          <div className="p-8 text-center">
            <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Nenhuma candidatura encontrada</p>
          </div>
        )}
      </div>
    </>
  );
}

function ApplicationDetails({ application }: { application: Application }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const status = statusMap[application.status as keyof typeof statusMap];
  const StatusIcon = status.icon;

  return (
    <div className="space-y-6 pt-4">
      {/* Header Info */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{application.name}</h3>
          <p className="text-muted-foreground">Candidatura para {application.jobTitle}</p>
        </div>
        <Badge className={status.color}>
          <StatusIcon className="h-3 w-3 mr-1" />
          {status.label}
        </Badge>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center space-x-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">{application.email}</span>
        </div>
        {application.phone && (
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{application.phone}</span>
          </div>
        )}
        <div className="flex items-center space-x-2 md:col-span-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm">Candidatou-se em {formatDate(application.appliedAt)}</span>
        </div>
      </div>

      {/* Experience */}
      {application.experience && (
        <div>
          <h4 className="font-medium text-foreground mb-2">Experiência Profissional</h4>
          <div className="bg-card border border-border rounded-md p-4">
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{application.experience}</p>
          </div>
        </div>
      )}

      {/* Motivation */}
      {application.motivation && (
        <div>
          <h4 className="font-medium text-foreground mb-2">Motivação</h4>
          <div className="bg-card border border-border rounded-md p-4">
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{application.motivation}</p>
          </div>
        </div>
      )}

      {/* Portfolio */}
      {application.portfolio && (
        <div>
          <h4 className="font-medium text-foreground mb-2">Portfolio</h4>
          <Button variant="outline" size="sm" className="flex items-center space-x-2" asChild>
            <a href={application.portfolio} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              <span>Visualizar Portfolio</span>
            </a>
          </Button>
        </div>
      )}

      {/* Actions */}
      <div className="flex space-x-3 pt-4 border-t border-border">
        <Button size="sm" className="flex items-center space-x-2">
          <CheckCircle className="h-4 w-4" />
          <span>Aprovar</span>
        </Button>
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          <Eye className="h-4 w-4" />
          <span>Em Análise</span>
        </Button>
        <Button variant="destructive" size="sm" className="flex items-center space-x-2">
          <XCircle className="h-4 w-4" />
          <span>Rejeitar</span>
        </Button>
      </div>
    </div>
  );
}