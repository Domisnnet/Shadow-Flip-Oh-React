// src/components/Card.jsx
import React from 'react';

// IMPORTAÇÃO DE IMAGENS (Ajuste o caminho para a sua pasta de imagens)
// Você deve importar todas as suas imagens aqui!
import cosmosSentinel from '../imagens/cosmos-sentinel.png'; 
import nebuladragon from '../imagens/nebuladragon.png';
import cyberbladePaladin from '../imagens/cyberblade-paladin.png';
import mechadragon from '../imagens/mechadragon.png';
import archmage from '../imagens/archmage.png';
import aegisKnight from '../imagens/aegis-knight.png';
import stormbringer from '../imagens/stormbringer.png';

// Mapeamento de nome de arquivo para a variável importada.
const cardImages = {
  'cosmos-sentinel.png': cosmosSentinel,
  'nebuladragon.png': nebuladragon,
  'cyberblade-paladin.png': cyberbladePaladin,
  'mechadragon.png': mechadragon,
  'archmage.png': archmage,
  'aegis-knight.png': aegisKnight,
  'stormbringer.png': stormbringer,
};

function Card({ data, isSelected, isFlipped }) {
  const { nome, fundo, nivel, imagem, alt, descricao, atk, def } = data;

  // Monta as classes CSS (classe de fundo + classe de seleção/virar)
  const cardClasses = `cartao ${fundo} ${isSelected ? 'selecionado' : ''}`; // isFlipped não precisa aqui se for controlado na div interna
  const totalEstrelas = nivel;
  
  // Array de elementos <span> para as estrelas
  const estrelas = Array.from({ length: totalEstrelas }).map((_, index) => (
    <span key={index} className="estrela"></span>
  ));
  
  // Obtém o caminho da imagem dinamicamente do mapeamento
  const imageSrc = cardImages[imagem]; 

  return (
    // Usa className em vez de class, conforme a sintaxe JSX
    <li className="lista-personagens">
      <div className={cardClasses}> 
        
        {/* VERSO DA CARTA: Controlado pela propriedade isFlipped */}
        <div className={`carta-virada ${isFlipped ? 'mostrar-fundo-carta' : ''}`}></div>

        {/* FRENTE DA CARTA */}
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