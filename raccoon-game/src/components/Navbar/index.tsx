import React from 'react';
import {
  NavbarContainer,
  Logo,
  LogoImage,
  LogoText,
  NavigationMenu,
  TextButton,
  GetStartedButton,
} from './styles';

const RocketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8333 4.16667L4.16666 15.8333" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.16666 4.16667L15.8333 15.8333" stroke="#2D2D2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface NavbarProps {
  logoSrc: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc }) => {
  return (
    <NavbarContainer>
      <Logo>
        <LogoImage src={logoSrc} alt="Racoon Logo" />
        <LogoText>Raccoonin'</LogoText>
      </Logo>
      
      <NavigationMenu>
        <TextButton>How it works</TextButton>
        <GetStartedButton>
          <RocketIcon />
          Get Started
        </GetStartedButton>
      </NavigationMenu>
    </NavbarContainer>
  );
};

export default Navbar;