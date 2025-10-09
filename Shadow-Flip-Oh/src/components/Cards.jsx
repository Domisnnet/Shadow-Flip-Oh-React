
import React from 'react';

// Importa todas as imagens para que o Vite/Webpack as processe corretamente
import cosmosSentinel from '../imagens/cosmos-sentinel.png'; 
// IMPORTANTE: Adicione as importações de TODAS as outras imagens aqui (nebuladragon, cyberblade, etc.)
// Exemplo:
// import nebuladragon from '../imagens/nebuladragon.png';

// Um objeto para mapear o nome do arquivo para a variável importada.
// Esta é uma técnica avançada, mas necessária no React/Vite.
const cardImages = {
  'cosmos-sentinel.png': cosmosSentinel,
  // 'nebuladragon.png': nebuladragon, // Adicione aqui
  // ...
};

function Card({ data, isSelected, isFlipped }) {
  const { nome, fundo, nivel, imagem, alt, descricao, atk, def } = data;

  // 1. Lógica de Classes Dinâmicas
  const cardClasses = `cartao ${fundo} ${isSelected ? 'selecionado' : ''} ${isFlipped ? 'virar' : ''}`;
  const totalEstrelas = nivel;

  // 2. Lógica para Estrelas (Nível)
  const estrelas = Array.from({ length: totalEstrelas }).map((_, index) => (
    // 'key' é obrigatório no React para listas!
    <span key={index} className="estrela"></span>
  ));
  
  // 3. Obtém o caminho da imagem dinâmica
  const imageSrc = cardImages[imagem]; 

  return (
    <li className="lista-personagens">
      <div className={cardClasses}> 
        
        {/* VERSO DA CARTA (Lógica de virar a carta) */}
        <div className={`carta-virada ${isFlipped ? 'mostrar-fundo-carta' : ''}`}></div>

        {/* FRENTE DA CARTA */}
        {/* Usamos className em vez de class, e o h2/p/div do seu HTML */}
        <h2 className="nome">{nome}</h2>

        <div className="nivel-carta">
          {estrelas}
        </div>

        <img
          src={imageSrc}
          alt={alt}
          className="imagem-carta"
        />

        <div className="informacoes">
          <p className="descricao">{descricao}</p>
          <div className="informacoes-ataque">
            <span>ATK/ {atk}</span>
            <span>DEF/ {def}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;