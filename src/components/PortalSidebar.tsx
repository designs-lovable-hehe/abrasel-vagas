import abraselLogo from '@/assets/abrasel-portal-logo.png';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Settings, 
  LogOut 
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  { title: "Dashboard", url: "/portal", icon: LayoutDashboard },
  { title: "Candidaturas", url: "/portal/applications", icon: Users },
  { title: "Vagas", url: "/portal/jobs", icon: Briefcase },
  { title: "Configurações", url: "/portal/settings", icon: Settings },
];

export function PortalSidebar() {
  const { state } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/login');
  };

  const isRouteActive = (url: string) =>
    location.pathname === url || (url !== "/portal" && location.pathname.startsWith(url));

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center justify-center">
          <img 
            src={abraselLogo} 
            alt="Abrasel Portal" 
            className="h-8 w-auto"
          />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isRouteActive(item.url)} className="text-sidebar-foreground">
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/portal"}
                    >
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4">
        <Button 
          variant="ghost" 
          onClick={handleLogout}
          className="w-full justify-start text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent"
        >
          <LogOut className="h-4 w-4" />
          {!isCollapsed && <span className="ml-2">Sair</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}