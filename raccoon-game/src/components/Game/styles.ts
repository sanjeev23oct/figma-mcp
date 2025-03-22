import styled from 'styled-components';

export const GameSection = styled.section`
  position: relative;
  width: 100%;
  height: 814px;
  background-color: rgba(9, 12, 19, 1);
`;

export const HeartContainer = styled.div`
  position: absolute;
  left: 66.5px;
  top: 76px;
  display: flex;
  gap: 1px;
`;

export const Heart = styled.img`
  width: 76px;
  height: 76px;
`;

export const Score = styled.div`
  position: absolute;
  left: 76px;
  top: 151px;
  font-family: 'Poppins', sans-serif;
  font-size: 38px;
  font-weight: 700;
  color: #FFFFFF;
`;

export const RaccoonCharacter = styled.img`
  position: absolute;
  left: 218px;
  bottom: 40px;
  width: 260px;
  height: 260px;
  transform-origin: bottom center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const TrashCan = styled.img`
  position: absolute;
  right: 293px;
  bottom: 40px;
  width: 136px;
  height: 192px;
`;

export const Pizza = styled.img`
  position: absolute;
  right: 293px;
  bottom: 196.5px;
  width: 136px;
  height: 117.5px;
`;

export const Coin = styled.img<{ index: number }>`
  position: absolute;
  width: 83px;
  height: 83px;
  left: ${props => 519.5 + props.index * 120}px;
  bottom: ${props => 168 + props.index * 120}px;
  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export const GameElements = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;