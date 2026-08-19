import React from 'react';
import { Code, Award, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Sobre mim</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Como recém-licenciada em Engenharia Informática pela Universidade do 
                Minho, especializei-me em Computação Gráfica através do adiantamento de 
                disciplinas do mestrado.
              </p>
              <p>
                Procuro dar continuidade ao meu percurso académico candidatando-me ao 
                Mestrado em Engenharia Informática, enquanto procuro oportunidades para 
                aplicar os meus conhecimentos em desenvolvimento front-end.
              </p>
              <p>
                Para além da programação, tenho uma sólida formação em música (violino, 5º grau) 
                e dedico tempo ao trabalho voluntário no Banco Alimentar Contra a Fome.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Desenvolvimento Frontend</h3>
                  <p className="text-sm text-gray-600">Vue.js, React.js, JavaScript, TypeScript</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Computação Gráfica</h3>
                  <p className="text-sm text-gray-600">Especialização em disciplinas de mestrado</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Competências Pessoais</h3>
                  <p className="text-sm text-gray-600">Música (violino) • Trabalho voluntário</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;