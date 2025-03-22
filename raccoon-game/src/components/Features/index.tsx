import React from 'react';
import {
  FeaturesSection,
  HeadlineContainer,
  Headline,
  Subhead,
  CardsContainer,
  FeatureCard,
  IconContainer,
  FeatureIcon,
  TextContainer,
  FeatureTitle,
  FeatureDescription,
} from './styles';

interface FeatureCardData {
  icon: string;
  backgroundColor: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  featureIcons: {
    dogIcon: string;
    trashIcon: string;
    foodIcon: string;
  };
}

const Features: React.FC<FeaturesProps> = ({ featureIcons }) => {
  const featureCards: FeatureCardData[] = [
    {
      icon: featureIcons.dogIcon,
      backgroundColor: 'rgba(255, 98, 80, 1)',
      title: 'Avoid Grumpy Dogs',
      description: 'If you see a dog run! Save your head, throw everything from your backpack!'
    },
    {
      icon: featureIcons.trashIcon,
      backgroundColor: 'rgba(242, 191, 175, 1)',
      title: 'Check the Trash Can',
      description: "Trash can is your friend, it's your gold keeper"
    },
    {
      icon: featureIcons.foodIcon,
      backgroundColor: 'rgba(248, 213, 126, 1)',
      title: 'Collect Food',
      description: 'Can you chew on it? Yes? Then it is food. Roll like a raccoon'
    }
  ];

  return (
    <FeaturesSection>
      <HeadlineContainer>
        <Headline>Are you up for the challenge?</Headline>
        <Subhead>Nobody said being a raccoon was a walk in the park!</Subhead>
      </HeadlineContainer>

      <CardsContainer>
        {featureCards.map((card, index) => (
          <FeatureCard key={index}>
            <IconContainer backgroundColor={card.backgroundColor}>
              <FeatureIcon src={card.icon} alt={card.title} />
            </IconContainer>
            <TextContainer>
              <FeatureTitle>{card.title}</FeatureTitle>
              <FeatureDescription>{card.description}</FeatureDescription>
            </TextContainer>
          </FeatureCard>
        ))}
      </CardsContainer>
    </FeaturesSection>
  );
};

export default Features;