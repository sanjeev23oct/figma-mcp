import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Game from './components/Game';
import Features from './components/Features';
import { HeartIcon, DogIcon, TrashIcon, FoodIcon } from './assets/icons';
import SvgIcon from './components/SvgIcon';

// These are the URLs from the Figma API
const ASSETS = {
  logo: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0351372-629e-453b-94aa-d2ab73b62ca0",
  raccoonCharacter: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92d65d8c-30c1-43bd-b4e6-836d969342d6",
  trashCan: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8e9cc1e-1057-4754-9e2f-8f12e4b0c5d0",
  pizza: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a388879-bd2b-4797-8d49-54e91bf32386",
  coin: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7da35306-8f85-4ca9-8019-e3b9af06e65b",
  icons: {
    heart: HeartIcon,
    dog: DogIcon,
    trash: TrashIcon,
    food: FoodIcon
  }
};

// Helper function to create SVG data URLs
const createSvgUrl = (svg: string) => `data:image/svg+xml;base64,${btoa(svg)}`;

const App: React.FC = () => {
  // Convert SVG icons to data URLs for img src attributes
  const featureIcons = {
    dogIcon: createSvgUrl(ASSETS.icons.dog),
    trashIcon: createSvgUrl(ASSETS.icons.trash),
    foodIcon: createSvgUrl(ASSETS.icons.food)
  };

  return (
    <>
      <GlobalStyle />
      <main>
        <Navbar logoSrc={ASSETS.logo} />
        <Hero />
        <Game
          heartIcon={createSvgUrl(ASSETS.icons.heart)}
          raccoonImage={ASSETS.raccoonCharacter}
          trashCanImage={ASSETS.trashCan}
          pizzaImage={ASSETS.pizza}
          coinImage={ASSETS.coin}
        />
        <Features featureIcons={featureIcons} />
      </main>
    </>
  );
};

export default App;
