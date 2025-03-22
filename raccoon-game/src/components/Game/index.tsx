import React, { useState } from 'react';
import {
  GameSection,
  HeartContainer,
  Heart,
  Score,
  RaccoonCharacter,
  TrashCan,
  Pizza,
  Coin,
  GameElements,
} from './styles';

interface GameProps {
  heartIcon: string;
  raccoonImage: string;
  trashCanImage: string;
  pizzaImage: string;
  coinImage: string;
}

const Game: React.FC<GameProps> = ({
  heartIcon,
  raccoonImage,
  trashCanImage,
  pizzaImage,
  coinImage,
}) => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const handleCoinClick = (index: number) => {
    setScore((prevScore) => prevScore + 100);
    // You could add coin collection animation here
  };

  return (
    <GameSection>
      <GameElements>
        <HeartContainer>
          {[...Array(lives)].map((_, index) => (
            <Heart 
              key={index} 
              src={heartIcon} 
              alt={`Heart ${index + 1}`} 
            />
          ))}
        </HeartContainer>

        <Score>Score: {score}</Score>

        <RaccoonCharacter
          src={raccoonImage}
          alt="Raccoon Character"
        />

        <TrashCan
          src={trashCanImage}
          alt="Trash Can"
        />

        <Pizza
          src={pizzaImage}
          alt="Pizza"
        />

        {[0, 1, 2].map((index) => (
          <Coin
            key={index}
            src={coinImage}
            alt={`Coin ${index + 1}`}
            index={index}
            onClick={() => handleCoinClick(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </GameElements>
    </GameSection>
  );
};

export default Game;