import React from 'react';
import fundoCarta from '../assets/fundo-carta.png';

import cosmosSentinel from '../assets/cosmos-sentinel.png';
import nebuladragon from '../assets/nebuladragon.png';
import cyberbladePaladin from '../assets/cyberblade-paladin.png';
import mechadragon from '../assets/mechadragon.png';
import archmage from '../assets/archmage.png';
import aegisKnight from '../assets/aegis-knight.png';
import stormbringer from '../assets/stormbringer.png';

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
  const imageSrc = cardImages[imagem];
  const estrelas = Array.from({ length: nivel }).map((_, index) => (
    <span key={index} className="estrela"></span>
  ));

  return (
    <li className="lista-personagens" onClick={onClick}>
      <div className={`cartao ${fundo} ${isSelected ? 'selecionado' : ''}`}>
        <div
          className="card-inner"
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.6s ease-in-out',
            transformStyle: 'preserve-3d',
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Verso da carta */}
          <div
            className="carta-virada"
            style={{
              backgroundImage: `url(${fundoCarta})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              borderRadius: '8px',
              transform: 'rotateY(180deg)',
            }}
          ></div>

          {/* Frente da carta */}
          <div
            className="card-front"
            style={{
              backfaceVisibility: 'hidden',
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
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
        </div>
      </div>
    </li>
  );
}

export default Card;