import React from 'react';

// IMPORTAÇÃO DE IMAGENS (Direto de assets, para buscar a imagem correta)
import cosmosSentinel from '../assets/cosmos-sentinel.png';
import nebuladragon from '../assets/nebuladragon.png';
import cyberbladePaladin from '../assets/cyberblade-paladin.png';
import mechadragon from '../assets/mechadragon.png';
import archmage from '../assets/archmage.png';
import aegisKnight from '../assets/aegis-knight.png';
import stormbringer from '../assets/stormbringer.png';

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

  // Monta as classes CSS para o DIV interno
  const cardClasses = `cartao ${fundo} ${isSelected ? 'selecionado' : ''}`;
  const totalEstrelas = nivel;

  // Array de elementos <span> para as estrelas
  const estrelas = Array.from({ length: totalEstrelas }).map((_, index) => (
    <span key={index} className="estrela"></span>
  ));

  // Obtém o caminho da imagem dinâmica
  const imageSrc = cardImages[imagem];

  return (
    <li>
      {/* O DIV interno recebe as classes de estilo e de estado (selecionado, fundo) */}
      <div className={cardClasses}>
        {/* VERSO DA CARTA */}
        <div className={`carta-virada ${isFlipped ? 'mostrar-fundo-carta' : ''}`}></div>

        {/* FRENTE DA CARTA - H2 e DIVs */}
        <h2 className="nome">{nome}</h2>
        <div className="nivel-carta">
          {estrelas}
        </div>
        <img src={imageSrc} alt={alt} className="imagem-carta" />
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