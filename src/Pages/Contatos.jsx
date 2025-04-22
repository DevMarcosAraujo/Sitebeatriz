import React, { useState } from 'react';
import '../App.css'; // Arquivo de estilo CSS
import imagemcontato from '../assets/CONVITE-00238.jpg'; // Caminho para sua imagem

const Contatos = () => {
  const [formData, setFormData] = useState({
    nome: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada por ${formData.nome}`);
    // Aqui você pode adicionar lógica para enviar os dados para um servidor
  };

  return (
    <div className="contato-container">
      <div className="foto-container">
        <img src={imagemcontato} alt="Doutora Beatriz" className="foto-perfil" />
      </div>
      <div className="informacoes-card">
        <h1>Contato</h1>
        <p>Email: meuemail@example.com</p>
        <p>Instagram: @meuInstagram</p>
        <p>"A arte fala por si mesma."</p>
      </div>
      
      <div className="cards-container">
        <div className="card">
          <h2>Card 1</h2>
          <p>Texto do primeiro card. Aqui você pode colocar informações ou qualquer outro conteúdo relevante.</p>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <p>Texto do segundo card. Esse também pode conter informações complementares ou detalhes adicionais.</p>
        </div>
      </div>

      <div className="form-container">
        <h2>Envie uma mensagem</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensagem"
            placeholder="Sua mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contatos;
