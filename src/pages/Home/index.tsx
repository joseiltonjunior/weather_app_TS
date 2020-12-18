import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PERMISSIONS, RESULTS, check } from 'react-native-permissions';
import { ActivityIndicator } from 'react-native';

import colors from '../../styles/colors';

import CardInfo from '../../components/Card';

import {
  Container,
  ContainerLoading,
  ViewHeader,
  ViewCard,
  TextCity,
  TextDegrees,
  TextLoading,
  TextDate,
  ViewRow,
  Icon,
  ButtomRefresh,
} from './styles';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const CheckLocation = useCallback(() => {
    setLoading(true);
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(res => {
      if (res === RESULTS.BLOCKED || res === RESULTS.DENIED) {
        navigation.navigate('AcessLocation');
        setLoading(false);
      }
      setLoading(false);
    });
  }, [navigation]);

  useEffect(() => {
    CheckLocation();
  }, [CheckLocation]);

  return (
    <Container>
      {loading ? (
        <ContainerLoading>
          <ActivityIndicator size={70} color={colors.OrangePrimary} />
          <TextLoading>Carregando...</TextLoading>
        </ContainerLoading>
      ) : (
        <>
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
              <TextCity>PE</TextCity>
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
            <CardInfo
              TextTitle="Pressão"
              TextInfo="1013,00hPa"
              isMarginBottom
            />
            <CardInfo
              TextTitle="Velocidade do vento"
              TextInfo="11.7Km/h"
              isMarginBottom
            />
            <CardInfo TextTitle="Índice UV" TextInfo="0" />
          </ViewCard>
        </>
      )}
    </Container>
  );
};

export default Home;
