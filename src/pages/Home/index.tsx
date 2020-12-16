import React from 'react';

import {
  Container,
  ViewHeader,
  TextCity,
  TextDegrees,
  TextDate,
  ViewRow,
  IconPoint,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ViewHeader>
        <TextDate>Terça-feira</TextDate>
        <TextDate>15 de Dezembro</TextDate>

        <TextDegrees>25º</TextDegrees>

        <ViewRow>
          <IconPoint name="map-marker" />
          <TextCity isCity>Recife, </TextCity>
          <TextCity>Pernambuco</TextCity>
        </ViewRow>
      </ViewHeader>
    </Container>
  );
};

export default Home;
