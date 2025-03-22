import React from 'react';
import {
  HeroSection,
  Header,
  Title,
  Subtitle,
  ButtonsContainer,
  StoreButton,
  StoreIcon,
  StoreText,
  StoreLabel,
  StoreName,
} from './styles';

const AppStoreIcon = () => (
  <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.37 12.85L19.54 8.12C19.8 7.77 19.77 7.29 19.47 6.97C19.16 6.65 18.68 6.62 18.33 6.88L14.98 9.24C14.63 9.5 14.6 9.98 14.9 10.3C15.21 10.62 15.69 10.65 16.04 10.39L16.37 12.85Z" fill="#2D2D2D"/>
    <path d="M5.17004 0C3.41004 0 2.00004 1.41 2.00004 3.17V21.83C2.00004 23.59 3.41004 25 5.17004 25H14.83C16.59 25 18 23.59 18 21.83V3.17C18 1.41 16.59 0 14.83 0H5.17004ZM10 23.75C9.04004 23.75 8.25004 22.96 8.25004 22C8.25004 21.04 9.04004 20.25 10 20.25C10.96 20.25 11.75 21.04 11.75 22C11.75 22.96 10.96 23.75 10 23.75Z" fill="#2D2D2D"/>
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.5 1.5L14 12L0.5 22.5V1.5Z" fill="#2D2D2D"/>
    <path d="M15 12L19 15L3 24L15 12Z" fill="#2D2D2D"/>
    <path d="M19 9L15 12L3 0L19 9Z" fill="#2D2D2D"/>
  </svg>
);

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <Header>
        <Title>Start Raccoonin Around</Title>
        <Subtitle>Collect Trash, Avoid Dogs, Be the Raccoon King</Subtitle>
      </Header>

      <ButtonsContainer>
        <StoreButton>
          <AppStoreIcon />
          <StoreText>
            <StoreLabel>Get it on</StoreLabel>
            <StoreName>App Store</StoreName>
          </StoreText>
        </StoreButton>

        <StoreButton>
          <PlayStoreIcon />
          <StoreText>
            <StoreLabel>Get it on</StoreLabel>
            <StoreName>Google Play</StoreName>
          </StoreText>
        </StoreButton>
      </ButtonsContainer>
    </HeroSection>
  );
};

export default Hero;