import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Pessoal",
      description: "Website pessoal desenvolvido em React.js com design responsivo.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/jessicaclcunha",
      category: "Frontend"
    },
    {
      title: "Aplicação de Computação Gráfica",
      description: "Projeto desenvolvido no âmbito da especialização em Computação Gráfica.",
      tech: ["C++", "OpenGL", "Algoritmos CG"],
      github: "https://github.com/jessicaclcunha",
      category: "Computação Gráfica"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projetos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Projetos desenvolvidos durante o meu percurso académico.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full">
                  {project.category}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="text-xs font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/jessicaclcunha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            Ver todos os projetos no GitHub
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;