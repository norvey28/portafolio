import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    profile: {
      name: 'Norvey Peña',
      role: 'Software Engineer',
      company: 'FONDO ACCION',
      location: 'Bogotá DC, Colombia',
      github: 'https://github.com/norvey28',
      avatar: 'https://avatars.githubusercontent.com/u/46493773?v=4',
      bio: 'Apasionado por construir soluciones de software robustas y escalables. Trabajando en FONDO ACCION, enfocado en desarrollo backend y arquitecturas limpias.',
    },

    skills: [
      { category: 'Backend',   items: ['Java', 'Spring Boot', 'Python', 'Node.js', 'REST APIs'] },
      { category: 'Frontend',  items: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3'] },
      { category: 'DevOps',    items: ['Git', 'Linux', 'Docker', 'CI/CD'] },
      { category: 'Databases', items: ['SQL', 'MySQL', 'PostgreSQL'] },
      { category: 'AI & Algo', items: ['Branch & Bound', 'Graph Search', 'Heuristics'] },
    ],

    projects: [
      {
        id: 1,
        name: 'Stock Investment',
        description: 'Aplicación Vue para seguimiento y análisis de inversiones en bolsa.',
        language: 'Vue',
        url: 'https://github.com/norvey28/Stock-investment',
        color: '#41b883',
      },
      {
        id: 2,
        name: 'Hospital API',
        description: 'API RESTful completa para gestión hospitalaria construida con Node.js y JavaScript.',
        language: 'JavaScript',
        url: 'https://github.com/norvey28/HOSPITAL-API',
        color: '#f7df1e',
      },
      {
        id: 3,
        name: 'IA Branch & Bound',
        description: 'Implementación de IA para resolver un problema de grafo ponderado usando ramificación y poda.',
        language: 'Python',
        url: 'https://github.com/norvey28/IA-Ramificacion-y-Poda',
        color: '#3572A5',
      },
      {
        id: 4,
        name: 'Catálogo Películas',
        description: 'Proyecto final del Curso Universidad Java — sistema de catálogo de películas con Java.',
        language: 'Java',
        url: 'https://github.com/norvey28/proyectoCatalogoPeliculas',
        color: '#b07219',
      },
      {
        id: 5,
        name: 'Buenas Prácticas Java',
        description: 'Repositorio de buenas prácticas, patrones de diseño y principios SOLID en Java.',
        language: 'Java',
        url: 'https://github.com/norvey28/buenas-practicas-java',
        color: '#b07219',
      },
      {
        id: 6,
        name: 'Service Configuration',
        description: 'Servicio de configuración centralizada para microservicios — Spring Cloud Config.',
        language: 'Java',
        url: 'https://github.com/norvey28/service-configuration',
        color: '#6db33f',
      },
    ],

    navLinks: [
      { label: 'inicio',    href: '#hero' },
      { label: 'sobre_mi',  href: '#about' },
      { label: 'proyectos', href: '#projects' },
      { label: 'skills',    href: '#skills' },
      { label: 'contacto',  href: '#contact' },
    ],
  }),
})
