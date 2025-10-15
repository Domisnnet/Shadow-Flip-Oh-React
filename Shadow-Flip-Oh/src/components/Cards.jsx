import React from 'react';

// IMPORTAÇÃO DE IMAGENS
import cosmosSentinel from '../assets/cosmos-sentinel.png';
import nebuladragon from '../assets/nebuladragon.png';
import cyberbladePaladin from '../assets/cyberblade-paladin.png';
import mechadragon from '../assets/mechadragon.png';
import archmage from '../assets/archmage.png';
import aegisKnight from '../assets/aegis-knight.png';
import stormbringer from '../assets/stormbringer.png';

// Mapeamento de nome de arquivo para a variável importada
const cardImages = {
  'cosmos-sentinel.png': cosmosSentinel,
  'nebuladragon.png': nebuladragon,
  'cyberblade-paladin.png': cyberbladePaladin,
  'mechadragon.png': mechadragon,
  'archmage.png': archmage,
  'aegis-knight.png': aegisKnight,
  'stormbringer.png': stormbringer,
};

function Card({ data, isSelected, isFlipped, onClick }) {
  const { nome, fundo, nivel, imagem, alt, descricao, atk, def } = data;

  const cardClasses = `cartao ${fundo} ${isSelected ? 'selecionado' : ''}`;
  const totalEstrelas = nivel;

  const estrelas = Array.from({ length: totalEstrelas }).map((_, index) => (
    <span key={index} className="estrela"></span>
  ));

  const imageSrc = cardImages[imagem];

  return (
    <li>
      <div className={cardClasses} onClick={onClick}>
        <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
          {/* Frente da carta */}
          <div className="card-front">
            <h2 className="nome">{nome}</h2>
            <div className="nivel-carta">{estrelas}</div>
            <img src={imageSrc} alt={alt} className="imagem-carta" />
            <div className="informacoes">
              <p className="descricao">{descricao}</p>
              <div className="informacoes-ataque">
                <span>ATK/ {atk}</span>
                <span>DEF/ {def}</span>
              </div>
            </div>
          </div>

          {/* Verso da carta */}
          <div className="card-back"></div>
        </div>
      </div>
    </li>
  );
}

export default Card;