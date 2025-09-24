import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Briefcase, Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      if (credentials.email && credentials.password) {
        toast({
          title: "Login realizado com sucesso!",
          description: "Redirecionando para o portal...",
        });
        navigate('/portal');
      } else {
        toast({
          title: "Erro no login",
          description: "Por favor, verifique suas credenciais.",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Briefcase className="h-10 w-10 text-white" />
            <h1 className="text-3xl font-bold text-white">TechJobs</h1>
          </div>
          <p className="text-white/80">Portal Administrativo</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-large border-0">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-semibold text-center flex items-center justify-center space-x-2">
              <Lock className="h-5 w-5 text-primary" />
              <span>Acesso Restrito</span>
            </CardTitle>
            <p className="text-muted-foreground text-center">
              Entre com suas credenciais para acessar o sistema
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Email</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="admin@techjobs.com"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password" className="flex items-center space-x-2">
                  <Lock className="h-4 w-4" />
                  <span>Senha</span>
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                  placeholder="••••••••"
                  required
                  className="mt-1"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300"
                disabled={isLoading}
                size="lg"
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </form>

            <div className="mt-6 pt-4 border-t border-border">
              <Button 
                variant="ghost" 
                className="w-full"
                onClick={() => navigate('/')}
              >
                Voltar para landing page
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Demo credentials info */}
        <Card className="mt-4 bg-muted/50 border-muted">
          <CardContent className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Demo:</strong> Use qualquer email e senha para testar
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}