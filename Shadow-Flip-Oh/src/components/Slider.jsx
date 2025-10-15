import React, { useState } from 'react';
import Card from './Cards.jsx';
import { cardsData } from '../data/cardsData'; 
import { ChevronRightIcon } from '@heroicons/react/24/solid'; 

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
        {/* 2. Usar o componente Heroicon, aplicando a classe CSS */}
        <ChevronRightIcon className="icon-seta" />
      </button>

      {/* Lista de Personagens */}
      <ul className="lista-personagens">
        {cardsData.map((card, index) => (
          <Card 
            key={card.id} 
            data={card} 
            isSelected={index === currentCardIndex}
            isFlipped={false} 
          />
        ))}
      </ul>

      {/* Botão de Avançar */}
      <button className="btn-seta btn-avancar" onClick={handleNext}>
        {/* 3. Usar o mesmo componente Heroicon e classe CSS */}
        <ChevronRightIcon className="icon-seta" />
      </button>
      
    </main>
  );
}

export default Slider;