import React from "react";
import "./Sobre.css";

const Sobre: React.FC = () => {
  return (
    <main className="sobre-page">
      {/* Hero Section */}
      <section className="sobre-hero">
        <div className="container">
          <div className="sobre-hero-content">
            <h1>Nossa História</h1>
            <p>Tradição, qualidade e paixão pela arte de barbear</p>
          </div>
        </div>
      </section>

      {/* História Section */}
      <section className="historia">
        <div className="container">
          <div className="historia-content">
            <div className="historia-text">
              <h2>Uma Tradição que Começou em 1992</h2>
              <p>
                Há mais de 30 anos, nossa barbearia nasceu do sonho de um jovem
                barbeiro apaixonado pela arte tradicional do corte masculino. O
                que começou como um pequeno estabelecimento no coração da
                cidade, hoje se tornou referência em estilo e qualidade.
              </p>
              <p>
                Desde o início, mantivemos nosso compromisso com a excelência,
                combinando técnicas clássicas com as tendências mais modernas.
                Cada cliente que passa por nossas cadeiras recebe não apenas um
                corte, mas uma experiência única de cuidado e atenção aos
                detalhes.
              </p>
              <p>
                Nossa equipe é formada por profissionais experientes e
                apaixonados, que compartilham da mesma filosofia: oferecer o
                melhor serviço com o máximo de dedicação. Utilizamos apenas
                produtos premium e equipamentos de última geração para garantir
                resultados impecáveis.
              </p>
            </div>
            <div className="historia-image">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Interior clássico da barbearia"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="valores">
        <div className="container">
          <h2>Nossos Valores</h2>
          <div className="valores-grid">
            <div className="valor-card">
              <div className="valor-icon">✂️</div>
              <h3>Excelência</h3>
              <p>
                Buscamos constantemente a perfeição em cada corte, utilizando
                técnicas refinadas e produtos de alta qualidade.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">🤝</div>
              <h3>Confiança</h3>
              <p>
                Construímos relacionamentos duradouros baseados na confiança e
                no respeito mútuo com nossos clientes.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">🎯</div>
              <h3>Tradição</h3>
              <p>
                Preservamos as técnicas clássicas da barbearia tradicional,
                adaptando-as aos estilos contemporâneos.
              </p>
            </div>
            <div className="valor-card">
              <div className="valor-icon">💎</div>
              <h3>Qualidade</h3>
              <p>
                Não fazemos concessões quando se trata de qualidade. Cada
                detalhe é pensado para sua satisfação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe Section */}
      <section className="equipe">
        <div className="container">
          <h2>Nosso Profissional</h2>
          <div className="equipe-grid">
            <div className="membro-card">
              <img
                src="/assets/logo nova.png"
                alt="Valmir Cardoso - Proprietário e Barbeiro Master"
              />
              <h3>Valmir Cardoso</h3>
              <p>Proprietário e Barbeiro Master</p>
              <span>Mais de 35 anos de experiência</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
