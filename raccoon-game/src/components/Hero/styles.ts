import styled from 'styled-components';

export const HeroSection = styled.section`
  padding: 120px 55px 60px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: rgba(9, 12, 19, 1);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
`;

export const Title = styled.h1`
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 67px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  color: #FFFFFF;
  font-family: 'Mulish', sans-serif;
  font-size: 28px;
  font-weight: 400;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

export const StoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 30px;
  background-color: rgba(248, 249, 255, 1);
  border-radius: 4px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StoreIcon = styled.img`
  width: 20px;
  height: 25px;
  object-fit: contain;
`;

export const StoreText = styled.div`
  display: flex;
  flex-direction: column;
  gap: -5px;
`;

export const StoreLabel = styled.span`
  color: rgba(45, 45, 45, 1);
  font-family: 'Mulish', sans-serif;
  font-size: 12px;
  font-weight: 400;
`;

export const StoreName = styled.span`
  color: rgba(45, 45, 45, 1);
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
`;