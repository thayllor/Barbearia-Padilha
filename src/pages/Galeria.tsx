import React, { useState } from 'react';
import './Galeria.css';

interface GaleriaItem {
  id: number;
  src: string;
  alt: string;
  categoria: 'ambiente' | 'cortes' | 'produtos';
}

const galeriaData: GaleriaItem[] = [
  // Ambiente
  { id: 1, src: '/assets/fachada.jpg', alt: 'Fachada da Barbearia Padilha', categoria: 'ambiente' },
  
  // Cortes - Trabalhos reais da Barbearia Padilha
  { id: 2, src: '/assets/corte 1.jpg', alt: 'Corte masculino profissional', categoria: 'cortes' },
  { id: 3, src: '/assets/corte 2.jpg', alt: 'Trabalho de corte e barba', categoria: 'cortes' },
  { id: 4, src: '/assets/corte 3.jpg', alt: 'Corte moderno e estiloso', categoria: 'cortes' },
  { id: 5, src: '/assets/corte 4.jpg', alt: 'Resultado final do corte', categoria: 'cortes' },
  { id: 6, src: '/assets/corte 6.jpg', alt: 'Corte degradê profissional', categoria: 'cortes' },
  { id: 7, src: '/assets/corte 7.jpg', alt: 'Estilo personalizado', categoria: 'cortes' },
  { id: 8, src: '/assets/corte 8.jpg', alt: 'Corte com acabamento perfeito', categoria: 'cortes' },
  { id: 9, src: '/assets/corte 9.jpg', alt: 'Trabalho de precisão', categoria: 'cortes' },
  { id: 10, src: '/assets/corte 10.jpg', alt: 'Resultado impecável', categoria: 'cortes' },
  
  // Clientes Satisfeitos - Resultados reais
  { id: 11, src: '/assets/clientes 1.jpg', alt: 'Cliente satisfeito - trabalho realizado', categoria: 'produtos' },
  { id: 12, src: '/assets/cliente 2.jpg', alt: 'Resultado do atendimento na Barbearia Padilha', categoria: 'produtos' },
  { id: 13, src: '/assets/cliente 3.jpg', alt: 'Cliente após serviço completo', categoria: 'produtos' },
  { id: 14, src: '/assets/cliente 4.jpg', alt: 'Satisfação garantida na Barbearia Padilha', categoria: 'produtos' },
];

const Galeria: React.FC = () => {
  const [filtroAtivo, setFiltroAtivo] = useState<'todos' | 'ambiente' | 'cortes' | 'produtos'>('todos');
  const [imagemModal, setImagemModal] = useState<GaleriaItem | null>(null);

  const imagensFiltradas = filtroAtivo === 'todos' 
    ? galeriaData 
    : galeriaData.filter(item => item.categoria === filtroAtivo);

  const abrirModal = (imagem: GaleriaItem) => {
    setImagemModal(imagem);
  };

  const fecharModal = () => {
    setImagemModal(null);
  };

  return (
    <main className="galeria-page">
      {/* Hero Section */}
      <section className="galeria-hero">
        <div className="container">
          <div className="galeria-hero-content">
            <h1>Nossa Galeria</h1>
            <p>Conheça nosso ambiente e veja nossos trabalhos</p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="filtros-section">
        <div className="container">
          <div className="filtros">
            <button 
              className={`filtro-btn ${filtroAtivo === 'todos' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('todos')}
            >
              Todos
            </button>
            <button 
              className={`filtro-btn ${filtroAtivo === 'ambiente' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('ambiente')}
            >
              Ambiente
            </button>
            <button 
              className={`filtro-btn ${filtroAtivo === 'cortes' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('cortes')}
            >
              Cortes
            </button>
            <button 
              className={`filtro-btn ${filtroAtivo === 'produtos' ? 'ativo' : ''}`}
              onClick={() => setFiltroAtivo('produtos')}
            >
              Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Grid de Imagens */}
      <section className="galeria-grid-section">
        <div className="container">
          <div className="galeria-grid">
            {imagensFiltradas.map(imagem => (
              <div 
                key={imagem.id} 
                className="galeria-item"
                onClick={() => abrirModal(imagem)}
              >
                <img src={imagem.src} alt={imagem.alt} />
                <div className="galeria-overlay">
                  <span>🔍</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {imagemModal && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={fecharModal}>×</button>
            <img src={imagemModal.src} alt={imagemModal.alt} />
            <div className="modal-info">
              <h3>{imagemModal.alt}</h3>
              <span className="categoria">{imagemModal.categoria}</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Galeria;
