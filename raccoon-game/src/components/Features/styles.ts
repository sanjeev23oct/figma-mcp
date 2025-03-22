import styled from 'styled-components';

export const FeaturesSection = styled.section`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

export const HeadlineContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Headline = styled.h2`
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 38px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Subhead = styled.p`
  color: #FFFFFF;
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 0 42px;
`;

export const FeatureCard = styled.div`
  flex: 1;
  max-width: 438px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 42px 24px;
`;

export const IconContainer = styled.div<{ backgroundColor: string }>`
  width: 228px;
  height: 228px;
  background-color: ${props => props.backgroundColor};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FeatureIcon = styled.img`
  width: 116.8px;
  height: 116.8px;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const FeatureTitle = styled.h3`
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const FeatureDescription = styled.p`
  color: #FFFFFF;
  font-family: 'Mulish', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;