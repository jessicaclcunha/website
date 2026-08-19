import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vamos trabalhar juntos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entre em contacto comigo para discutirmos oportunidades.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">jessicaclcunha03@gmail.com</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600">+351 933 666 802</p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Localização</h3>
              <p className="text-gray-600">Braga, Portugal</p>
            </div>
          </div>

          <form className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-4 max-w-2xl mx-auto">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="O seu nome"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-lavender-500 focus:ring-2 focus:ring-lavender-200
                    transition-all duration-300 placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="O seu email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Mensagem</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Escreva a sua mensagem..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-lavender-500 to-lavender-600 text-white py-3 rounded-lg
                        hover:shadow-lg hover:shadow-lavender-200 transition-all duration-300 font-medium"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;