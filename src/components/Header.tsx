import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import abraselLogo from '@/assets/abrasel-portal-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-abrasel-green shadow-medium relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-2 md:space-x-4">
            <img 
              src={abraselLogo} 
              alt="Abrasel - Associação Brasileira de Bares e Restaurantes" 
              className="h-8 md:h-12 w-auto"
            />
            <h1 className="text-lg md:text-2xl font-bold text-white">
              Portal de Carreiras
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#vagas" className="text-white hover:text-gray-200 transition-colors">
              Vagas
            </a>
            <a href="#sobre" className="text-white hover:text-gray-200 transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-white hover:text-gray-200 transition-colors">
              Contato
            </a>
            <Button 
              onClick={() => window.location.href = '/login'}
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-abrasel-green"
            >
              Portal Administrativo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-abrasel-green border-t border-white/20 shadow-lg">
            <nav className="flex flex-col space-y-2 p-4">
              <a 
                href="#vagas" 
                className="text-white hover:text-gray-200 transition-colors py-2 px-3 rounded hover:bg-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Vagas
              </a>
              <a 
                href="#sobre" 
                className="text-white hover:text-gray-200 transition-colors py-2 px-3 rounded hover:bg-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a 
                href="#contato" 
                className="text-white hover:text-gray-200 transition-colors py-2 px-3 rounded hover:bg-white/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <Button 
                onClick={() => {
                  window.location.href = '/login';
                  setIsMenuOpen(false);
                }}
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-abrasel-green mt-2 w-full"
              >
                Portal Administrativo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;