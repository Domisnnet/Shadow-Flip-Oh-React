import React, { useState } from 'react';
import Card from './Cards.jsx'; 
import cardsData from '../data/cardsData.js'; 
import Seta from '../assets/seta.png'; 

function Slider() {
  // Estado para controlar o índice da carta atualmente visível
  const [currentCardIndex, setCurrentCardIndex] = useState(0); 
  const totalCards = cardsData.length;

  const handleNext = () => {
    // Avança para a próxima carta, ou volta para a primeira (loop)
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePrev = () => {
    // Volta para a carta anterior, ou para a última (loop)
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <main className="slider">
      {/* Botão de Voltar */}
      <button className="btn-seta btn-voltar" onClick={handlePrev}>
        <img src={Seta} alt="seta voltar" />
      </button>

      {/* Lista de Personagens */}
      <ul className="lista-personagens">
        {/* Renderiza todos os cards */}
        {cardsData.map((card, index) => (
          <Card 
            key={card.id} 
            data={card} 
            // A carta está selecionada APENAS se seu índice for o índice atual
            isSelected={index === currentCardIndex}
            isFlipped={false} // Mantemos como false por enquanto
          />
        ))}
      </ul>

      {/* Botão de Avançar */}
      <button className="btn-seta btn-avancar" onClick={handleNext}>
        <img src={Seta} alt="seta avançar" />
      </button>
    </main>
  );
}

export default Slider;