import React, { useState } from 'react';
import Card from './Cards.jsx';
import { cardsData } from '../data/cardsData';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

function Slider() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const totalCards = cardsData.length;

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % totalCards);
    setIsFlipped(false); // reseta flip ao trocar
  };

  const handlePrev = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
    setIsFlipped(false); // reseta flip ao trocar
  };

  const toggleFlip = () => setIsFlipped((prev) => !prev);

  return (
    <main className="slider">
      <button className="btn-seta btn-voltar" onClick={handlePrev}>
        <ChevronRightIcon className="icon-seta" />
      </button>

      <ul className="lista-personagens">
        <Card
          data={cardsData[currentCardIndex]}
          isSelected={true}
          isFlipped={isFlipped}
          onClick={toggleFlip}
        />
      </ul>

      <button className="btn-seta btn-avancar" onClick={handleNext}>
        <ChevronRightIcon className="icon-seta" />
      </button>
    </main>
  );
}

export default Slider;