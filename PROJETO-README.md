# TechJobs - Sistema de Vagas de Emprego

Um sistema completo para gestão de candidaturas a vagas de emprego, desenvolvido com React, TypeScript e Tailwind CSS.

## 🎯 Funcionalidades

### Landing Page (Pública)
- **Seleção de Vagas**: Visualização intuitiva das vagas disponíveis
- **Formulário de Candidatura**: Coleta de informações dos candidatos
- **Tipos de Vaga Disponíveis**:
  - Desenvolvedor Frontend
  - Desenvolvedor Backend
  - Desenvolvedor Full Stack
  - Desenvolvedor Mobile
  - DevOps Engineer
  - UI/UX Designer

### Portal Administrativo (Restrito)
- **Acesso com Login**: Tela de autenticação para administradores
- **Dashboard de Estatísticas**: Visão geral das candidaturas
- **Listagem de Candidatos**: Visualização organizada das candidaturas
- **Filtros Avançados**: Por vaga, status e busca por nome/email
- **Detalhes Completos**: Informações detalhadas de cada candidato

## 🔧 Tecnologias Utilizadas

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Roteamento**: React Router DOM
- **Formulários**: React Hook Form
- **Notificações**: Sonner + Toast
- **Ícones**: Lucide React

## 🎨 Design System

- **Cores**: Esquema baseado em azul corporativo com gradientes
- **Componentes**: Sistema consistente com shadcn/ui customizado
- **Animações**: Transições suaves e responsivas
- **Layout**: Design responsivo para desktop e mobile

## 📱 Rotas do Sistema

- `/` - Landing page com formulário de candidatura
- `/login` - Tela de login do portal administrativo
- `/portal` - Dashboard administrativo (requer login)

## 🚀 Como Usar

### Para Candidatos
1. Acesse a página inicial
2. Selecione a vaga de interesse
3. Preencha o formulário com suas informações
4. Envie sua candidatura

### Para Administradores
1. Acesse `/login`
2. Use qualquer email e senha (demo)
3. Visualize o dashboard com estatísticas
4. Use os filtros para encontrar candidatos específicos
5. Clique em uma candidatura para ver detalhes completos

## 📊 Dados Demo

O sistema inclui dados de exemplo para demonstração:
- 3 candidaturas de exemplo
- Diferentes status (Pendente, Em análise, Aprovado)
- Informações completas dos candidatos

## 🔐 Funcionalidades de Backend Necessárias

Para uma implementação completa em produção, seria necessário integrar:

- **Autenticação real** com Supabase Auth
- **Banco de dados** para armazenar candidaturas
- **Upload de arquivos** para CVs e portfolios
- **Notificações por email** para candidatos e administradores
- **API REST** para operações CRUD

## 🎨 Personalizações

O sistema foi desenvolvido com foco na reutilização e customização:

- **Design System**: Tokens CSS customizáveis no `index.css`
- **Componentes**: shadcn/ui components com variantes personalizadas
- **Cores e Gradientes**: Facilmente modificáveis via CSS variables
- **Layout Responsivo**: Adaptável a diferentes tamanhos de tela

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Tablet**: Layout adaptado para telas médias
- **Desktop**: Experiência completa com sidebar e múltiplas colunas

---

*Sistema desenvolvido com foco em experiência do usuário e facilidade de manutenção.*