import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users, Send } from 'lucide-react';

interface JobCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  benefits: string[];
  isSelected: boolean;
  onClick: () => void;
}

export default function JobCard({ 
  title, 
  description, 
  image, 
  company, 
  location, 
  salary, 
  type, 
  benefits,
  isSelected, 
  onClick 
}: JobCardProps) {
  return (
    <Card 
      className={`h-full flex flex-col transition-all duration-300 hover:shadow-medium hover-scale group ${
        isSelected 
          ? 'ring-2 ring-primary shadow-medium bg-gradient-primary text-primary-foreground' 
          : 'hover:shadow-soft'
      }`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <Badge variant={isSelected ? "secondary" : "default"} className="shadow-soft text-xs">
            {type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
        <div className="flex-1 space-y-3 sm:space-y-4">
          <div>
            <h4 className="font-bold text-lg sm:text-xl mb-1 leading-tight">{title}</h4>
            <p className={`text-xs sm:text-sm ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
              {company}
            </p>
          </div>
          
          <p className={`text-xs sm:text-sm leading-relaxed ${isSelected ? 'text-primary-foreground/90' : 'text-foreground'}`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-xs sm:text-sm">
            <div className={`flex items-center space-x-1 ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="truncate">{location}</span>
            </div>
            <div className={`flex items-center space-x-1 ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
              <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="truncate">{salary}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className={`flex items-center space-x-1 text-xs sm:text-sm ${isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
              <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span>Benefícios:</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {benefits.slice(0, 3).map((benefit, index) => (
                <Badge 
                  key={index} 
                  variant={isSelected ? "secondary" : "outline"} 
                  className="text-xs leading-tight"
                >
                  {benefit}
                </Badge>
              ))}
              {benefits.length > 3 && (
                <Badge variant={isSelected ? "secondary" : "outline"} className="text-xs">
                  +{benefits.length - 3} mais
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="pt-3 sm:pt-4 border-t border-border/20 mt-3 sm:mt-4">
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base h-9 sm:h-10"
            size="lg"
          >
            <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
            <span className="truncate">Aplicar para Vaga</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}