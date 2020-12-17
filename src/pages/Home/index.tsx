import React from 'react';

import CardInfo from '../../components/Card';

import {
  Container,
  ViewHeader,
  ViewCard,
  TextCity,
  TextDegrees,
  TextDate,
  ViewRow,
  Icon,
  ButtomRefresh,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ViewHeader>
        <ButtomRefresh>
          <Icon name="refresh" />
        </ButtomRefresh>
        <TextDate>Terça-feira</TextDate>
        <TextDate>15 de Dezembro</TextDate>

        <TextDegrees>25º</TextDegrees>

        <ViewRow>
          <Icon name="map-marker" />
          <TextCity isCity>Recife, </TextCity>
          <TextCity>Pernambuco</TextCity>
        </ViewRow>
      </ViewHeader>

      <ViewCard>
        <CardInfo TextTitle="Sensação" TextInfo="26.5" isMarginBottom />
        <CardInfo TextTitle="Umidade" TextInfo="74%" isMarginBottom />
        <CardInfo
          TextTitle="Possibilidade de chuva"
          TextInfo="50%"
          isMarginBottom
        />
        <CardInfo TextTitle="Pressão" TextInfo="1013,00hPa" isMarginBottom />
        <CardInfo
          TextTitle="Velocidade do vento"
          TextInfo="11.7Km/h"
          isMarginBottom
        />
        <CardInfo TextTitle="Índice UV" TextInfo="0" />
      </ViewCard>
    </Container>
  );
};

export default Home;
