import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { PortalSidebar } from '@/components/PortalSidebar';
import { Separator } from '@/components/ui/separator';
import { 
  Settings as SettingsIcon, 
  User,
  Bell,
  Shield,
  Mail,
  Palette,
  Save,
  Building,
  Globe
} from 'lucide-react';

export default function Settings() {
  useEffect(() => {
    document.title = 'Configurações - Abrasel Portal';
  }, []);

  const [companySettings, setCompanySettings] = useState({
    companyName: 'Abrasel',
    companyEmail: 'contato@abrasel.com',
    companyPhone: '(11) 99999-0000',
    companyWebsite: 'https://abrasel.com',
    companyDescription: 'Plataforma de recrutamento especializada no setor gastronômico.',
    companyAddress: 'São Paulo, SP'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    newApplications: true,
    statusUpdates: true,
    weeklyReports: false,
    marketingEmails: false
  });

  const [systemSettings, setSystemSettings] = useState({
    theme: 'light',
    language: 'pt-BR',
    timezone: 'America/Sao_Paulo',
    autoApproval: false,
    applicationLimit: '100'
  });

  const handleSave = () => {
    // Aqui seria implementada a lógica de salvamento
    console.log('Settings saved:', {
      companySettings,
      notificationSettings,
      systemSettings
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-subtle">
        <PortalSidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="bg-card shadow-soft border-b border-border">
            <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
              <div className="flex items-center space-x-2 md:space-x-4 min-w-0 flex-1">
                <SidebarTrigger className="text-muted-foreground" />
                <div className="min-w-0 flex-1">
                  <h1 className="text-lg md:text-2xl font-bold text-foreground truncate">Configurações</h1>
                  <p className="text-xs md:text-sm text-muted-foreground truncate">Gerencie as configurações do sistema</p>
                </div>
              </div>
              <Button onClick={handleSave} size="sm" className="ml-2 md:ml-4">
                <Save className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Salvar Alterações</span>
                <span className="sm:hidden">Salvar</span>
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Company Settings */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Building className="h-5 w-5" />
                    <span>Informações da Empresa</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Nome da Empresa</Label>
                      <Input
                        id="companyName"
                        value={companySettings.companyName}
                        onChange={(e) => setCompanySettings(prev => ({
                          ...prev,
                          companyName: e.target.value
                        }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyEmail">Email</Label>
                      <Input
                        id="companyEmail"
                        type="email"
                        value={companySettings.companyEmail}
                        onChange={(e) => setCompanySettings(prev => ({
                          ...prev,
                          companyEmail: e.target.value
                        }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyPhone">Telefone</Label>
                      <Input
                        id="companyPhone"
                        value={companySettings.companyPhone}
                        onChange={(e) => setCompanySettings(prev => ({
                          ...prev,
                          companyPhone: e.target.value
                        }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="companyWebsite">Website</Label>
                      <Input
                        id="companyWebsite"
                        value={companySettings.companyWebsite}
                        onChange={(e) => setCompanySettings(prev => ({
                          ...prev,
                          companyWebsite: e.target.value
                        }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyAddress">Endereço</Label>
                    <Input
                      id="companyAddress"
                      value={companySettings.companyAddress}
                      onChange={(e) => setCompanySettings(prev => ({
                        ...prev,
                        companyAddress: e.target.value
                      }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyDescription">Descrição</Label>
                    <Textarea
                      id="companyDescription"
                      rows={4}
                      value={companySettings.companyDescription}
                      onChange={(e) => setCompanySettings(prev => ({
                        ...prev,
                        companyDescription: e.target.value
                      }))}
                    />
                  </div>
                </CardContent>
              </Card>


              {/* System Settings */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <SettingsIcon className="h-5 w-5" />
                    <span>Configurações do Sistema</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="theme">Tema</Label>
                      <Select
                        value={systemSettings.theme}
                        onValueChange={(value) =>
                          setSystemSettings(prev => ({ ...prev, theme: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Claro</SelectItem>
                          <SelectItem value="dark">Escuro</SelectItem>
                          <SelectItem value="system">Sistema</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="language">Idioma</Label>
                      <Select
                        value={systemSettings.language}
                        onValueChange={(value) =>
                          setSystemSettings(prev => ({ ...prev, language: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                          <SelectItem value="en-US">English (US)</SelectItem>
                          <SelectItem value="es-ES">Español</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timezone">Fuso Horário</Label>
                      <Select
                        value={systemSettings.timezone}
                        onValueChange={(value) =>
                          setSystemSettings(prev => ({ ...prev, timezone: value }))
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/Sao_Paulo">São Paulo (GMT-3)</SelectItem>
                          <SelectItem value="America/New_York">New York (GMT-5)</SelectItem>
                          <SelectItem value="Europe/London">London (GMT+0)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="applicationLimit">Limite de Candidaturas por Vaga</Label>
                      <Input
                        id="applicationLimit"
                        type="number"
                        value={systemSettings.applicationLimit}
                        onChange={(e) =>
                          setSystemSettings(prev => ({
                            ...prev,
                            applicationLimit: e.target.value
                          }))
                        }
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Aprovação Automática</Label>
                      <p className="text-sm text-muted-foreground">
                        Aprovar automaticamente candidaturas que atendem critérios específicos
                      </p>
                    </div>
                    <Switch
                      checked={systemSettings.autoApproval}
                      onCheckedChange={(checked) =>
                        setSystemSettings(prev => ({
                          ...prev,
                          autoApproval: checked
                        }))
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Security Settings */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Segurança</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Alterar Senha</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Para alterar sua senha, clique no botão abaixo e siga as instruções enviadas por email.
                    </p>
                    <Button variant="outline">
                      <Mail className="h-4 w-4 mr-2" />
                      Enviar Link de Alteração
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Sessões Ativas</Label>
                    <p className="text-sm text-muted-foreground mb-4">
                      Gerencie suas sessões ativas em diferentes dispositivos.
                    </p>
                    <Button variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      Ver Sessões Ativas
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}