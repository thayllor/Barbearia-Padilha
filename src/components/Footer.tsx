import React from 'react';
import './Footer.css';
import { getContactWhatsAppLink } from '../utils/whatsapp';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Barbearia Padilha</h3>
          <p>
            Tradição, qualidade e estilo em um só lugar. 
            Há mais de 20 anos cuidando do visual masculino com excelência.
          </p>
          <p>
            📘 <a href="https://www.facebook.com/profile.php?id=100038215403178&locale=pt_BR" target="_blank" rel="noopener noreferrer" style={{color: '#6c5ce7', textDecoration: 'none'}}>
              Siga-nos no Facebook
            </a>
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Contato</h4>
          <div className="contact-info">
            <p>
              📞 <a href={getContactWhatsAppLink()} target="_blank" rel="noopener noreferrer" style={{color: '#6c5ce7', textDecoration: 'none'}}>
                (53) 99936-5916
              </a>
            </p>
            <p>✉️ vcsjunior07@gmail.com</p>
            <p>📍 472 R. Augusto Duprat - Rio Grande/RS</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Horários</h4>
          <div className="hours">
            <p><strong>Segunda a Sexta:</strong> 9h às 19h</p>
            <p><strong>Sábado:</strong> 9h às 17h</p>
            <p><strong>Domingo:</strong> Fechado</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Barbearia Padilha. Todos os direitos reservados.</p>
        <p>Desenvolvido com ❤️ e React + TypeScript</p>
      </div>
    </footer>
  );
};

export default Footer;
