import React from 'react';

import { Container, TextCard, ViewText } from './styles';

interface ICard {
  TextTitle?: string;
  TextInfo?: string;
  isMarginBottom?: boolean;
}

const Card: React.FC<ICard> = ({ TextTitle, TextInfo, isMarginBottom }) => {
  return (
    <Container isMarginBottom={isMarginBottom}>
      <ViewText>
        <TextCard>{TextTitle}</TextCard>
        <TextCard isValue>{TextInfo}</TextCard>
      </ViewText>
    </Container>
  );
};

export default Card;
