import React from 'react'
import { Mail, Phone, Github, Linkedin, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 border border-primary-400 text-primary-600 rounded-full text-sm font-medium animate-pulse">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                Disponível para oportunidades
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Olá, sou a <span className="text-primary-600">Jéssica Cunha</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Engenheira Informática especializada em Computação Gráfica, 
                procurando oportunidades em desenvolvimento front-end.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2 group"
              >
                Entrar em contacto
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://github.com/jessicaclcunha"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
              >
                <Github size={18} />
                Ver GitHub
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href="mailto:jessicaclcunha03@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Mail size={20} />
              </a>
              <a href="tel:+351933666802" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Phone size={20} />
              </a>
              <a href="https://github.com/jessicaclcunha" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/jessicaclcunha" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="relative">
              <div className="w-80 h-80 mx-auto relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-lavender-100 to-lavender-200 rounded-2xl rotate-6 blur-xl opacity-30"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl flex items-center justify-center shadow-xl
                                border-2 border-lavender-100 hover:border-lavender-300 transition-all duration-500">
                <div className="text-6xl">👩‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero