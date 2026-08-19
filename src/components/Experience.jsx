import React from 'react';
import { GraduationCap, User, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Estudante de Engenharia Informática",
      company: "Universidade do Minho",
      period: "2021 - 2025",
      description: "Especialização em Computação Gráfica com adiantamento de disciplinas do mestrado.",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      title: "Trabalho Voluntário",
      company: "Banco Alimentar Contra a Fome",
      period: "Presente",
      description: "Participação em campanhas de recolha de alimentos.",
      icon: <User className="w-5 h-5" />
    },
    {
      title: "Formação Musical",
      company: "Academia de Música Fernandes Fão",
      period: "2013 - 2018",
      description: "Conclusão do 5º grau de violino em ensino articulado.",
      icon: <Award className="w-5 h-5" />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experiência</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            O meu percurso académico e pessoal.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-gray-600 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;