import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Universidade do Minho",
      degree: "Licenciatura em Engenharia Informática",
      period: "2021 - 2025",
      description: "Especialização em Computação Gráfica.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      institution: "Escola Básica e Secundária de Arcozelo",
      degree: "Ensino Secundário",
      period: "2018 - 2021",
      description: "Formação preparatória para o ensino superior.",
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  const certificates = [
    { name: "Learn TypeScript", provider: "Scrimba", year: "2024" },
    { name: "Learn React", provider: "Scrimba", year: "2024" },
    { name: "Advanced React", provider: "Scrimba", year: "2024" }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Educação</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Percurso académico combinando formação técnica e artística.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    {edu.icon}
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{edu.institution}</h3>
                        <p className="text-gray-600 font-medium">{edu.degree}</p>
                      </div>
                      <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full mt-2 sm:mt-0">
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Certificações</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-gray-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.provider} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;