import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: rgba(9, 12, 19, 1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 42px;
  z-index: 1000;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const LogoImage = styled.img`
  width: 77px;
  height: 48.7px;
`;

export const LogoText = styled.span`
  color: rgba(248, 249, 255, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 21px;
  font-weight: 700;
`;

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const TextButton = styled.button`
  background: none;
  color: rgba(248, 249, 255, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
`;

export const GetStartedButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 50px;
  background-color: rgba(255, 223, 144, 1);
  border-radius: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: rgba(45, 45, 45, 1);
  
  svg {
    width: 20px;
    height: 20px;
  }
`;