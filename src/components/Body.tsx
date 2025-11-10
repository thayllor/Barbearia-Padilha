import React from 'react';
import './Body.css';
import { getAppointmentWhatsAppLink, getContactWhatsAppLink } from '../utils/whatsapp';

const Body: React.FC = () => {
  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Entre em contato com nosso barbeiro profissional</h1>
            <p>
              Profissional experiente, ambiente acolhedor e os melhores 
              produtos para cuidar do seu visual com excelência e dedicação.
            </p>
            <a href={getAppointmentWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">Agendar Horário</button>
            </a>
          </div>
          <div className="hero-image">
            <img 
              src="/assets/corte 7.jpg" 
              alt="Trabalho realizado na Barbearia Padilha - Corte profissional"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Nossos Serviços</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">✂️</div>
              <h3>Cortes Modernos</h3>
              <p>Cortes personalizados seguindo as últimas tendências</p>
              <span className="price">A partir de R$ 30</span>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🧔</div>
              <h3>Barba & Bigode</h3>
              <p>Aparação e modelagem profissional da barba</p>
              <span className="price">A partir de R$ 25</span>
            </div>
            
            <div className="service-card">
              <div className="service-icon">💆</div>
              <h3>Tratamentos</h3>
              <p>Hidratação capilar e cuidados especiais</p>
              <span className="price">A partir de R$ 20</span>
            </div>
          </div>
        </div>
      </section>

      {/* Localização Section */}
      <section className="localizacao">
        <div className="container">
          <h2>Nossa Localização</h2>
          <p>Venha nos visitar! Estamos bem localizados no coração da cidade</p>
          
          <div className="localizacao-content">
            <div className="localizacao-info">
              <div className="info-item">
                <h3>📍 Endereço</h3>
                <p>472 R. Augusto Duprat<br />Rio Grande - Rio Grande do Sul<br />CEP: 96200-000</p>
              </div>
              
              <div className="info-item">
                <h3>🕒 Horário de Funcionamento</h3>
                <div className="horarios">
                  <p><strong>Segunda a Sexta:</strong> 09:00 - 19:00</p>
                  <p><strong>Sábado:</strong> 08:00 - 18:00</p>
                  <p><strong>Domingo:</strong> 10:00 - 16:00</p>
                </div>
              </div>
              
              <div className="info-item">
                <h3>🚗 Estacionamento</h3>
                <p>Fácil acesso por transporte público e grande espaço para estacionar na região</p>
              </div>
            </div>
            
            <div className="mapa-fachada-container">
              <div className="mapa-container">
                <iframe
                  src="https://maps.google.com/maps?q=472%20R.%20Augusto%20Duprat,%20Rio%20Grande,%20Rio%20Grande%20do%20Sul&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="350"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Barbearia - 472 R. Augusto Duprat, Rio Grande/RS"
                ></iframe>
              </div>
              
              <div className="fachada-container">
                <h3>🏢 Nossa Fachada</h3>
                <div className="fachada-image">
                  <img 
                    src="/assets/fachada.jpg" 
                    alt="Fachada da Barbearia Padilha - 472 R. Augusto Duprat"
                  />
                  <div className="fachada-overlay">
                    <p>📍 472 R. Augusto Duprat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Pronto para um novo visual?</h2>
          <p>Agende seu horário e venha conhecer nossos serviços</p>
          <a href={getContactWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <button className="btn-secondary">Entrar em Contato</button>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Body;
