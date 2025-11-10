// Utilitário para gerar links do WhatsApp
export const generateWhatsAppLink = (phoneNumber: string, message: string): string => {
  // Remove caracteres não numéricos do telefone
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  
  // Codifica a mensagem para URL
  const encodedMessage = encodeURIComponent(message);
  
  // Retorna o link do WhatsApp
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
};

// Configurações da barbearia
export const BARBERSHOP_CONFIG = {
  phone: '5553999365916', // Número no formato internacional (código do país + DDD + número)
  messages: {
    contact: 'Olá! 👋 Vim através do site e gostaria de mais informações sobre os serviços da barbearia. 💇‍♂️',
    appointment: 'Olá! 👋 Gostaria de agendar um horário na barbearia. Qual a disponibilidade? 📅✂️',
    services: 'Olá! 👋 Vim através do site e gostaria de conhecer todos os serviços disponíveis e valores. 💰💇‍♂️',
  }
};

// Funções específicas para cada tipo de contato
export const getContactWhatsAppLink = () => {
  return generateWhatsAppLink(BARBERSHOP_CONFIG.phone, BARBERSHOP_CONFIG.messages.contact);
};

export const getAppointmentWhatsAppLink = () => {
  return generateWhatsAppLink(BARBERSHOP_CONFIG.phone, BARBERSHOP_CONFIG.messages.appointment);
};

export const getServicesWhatsAppLink = () => {
  return generateWhatsAppLink(BARBERSHOP_CONFIG.phone, BARBERSHOP_CONFIG.messages.services);
};
