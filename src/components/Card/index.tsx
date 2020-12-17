import React from 'react';

import { Container, TitleCard, ViewText } from './styles';

interface ICard {
  TextTitle?: string;
  TextInfo?: string;
  isMarginBottom?: boolean;
}

const Card: React.FC<ICard> = ({ TextTitle, TextInfo, isMarginBottom }) => {
  return (
    <Container isMarginBottom={isMarginBottom}>
      <ViewText>
        <TitleCard>{TextTitle}</TitleCard>
        <TitleCard>{TextInfo}</TitleCard>
      </ViewText>
    </Container>
  );
};

export default Card;
