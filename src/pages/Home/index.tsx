/* eslint-disable radix */
/* eslint-disable import/no-duplicates */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PERMISSIONS, RESULTS, check } from 'react-native-permissions';
import { ActivityIndicator } from 'react-native';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import Geolocation from '@react-native-community/geolocation';

import colors from '../../styles/colors';
import api from '../../services/consultWeatherApi';
import CardInfo from '../../components/Card';
import Modal from '../../components/ModalCustom';

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

interface IDate {
  dayName?: string;
  dayValue?: string;
}

interface ICurrencyWeather {
  country?: string;
  locale?: string;
  temp?: number;
  temp_min?: number;
  temp_max?: number;
  humidity?: number;
  pressure?: number;
  speed?: number;
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState<IDate>({});
  const [currencyWeather, setCurrecyWeather] = useState<ICurrencyWeather>({});
  const [modalFalied, setModalFalied] = useState(false);

  const navigation = useNavigation();

  const GetCurrentWeather = useCallback(() => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const { data } = await api.get(
          `weather?lat=${latitude}&lon=${longitude}&appid=19304a0bf354c6f5ceb08d8952a2ce64`,
        );

        const { temp, temp_max, temp_min, humidity, pressure } = data.main;
        const { speed } = data.wind;
        const { name: locale } = data;
        const { country } = data.sys;

        setCurrecyWeather({
          country,
          locale,
          temp,
          temp_max,
          temp_min,
          humidity,
          pressure,
          speed,
        });

        setLoading(false);
      },
      error => {
        console.log(error);
        setModalFalied(true);
      },
      {
        timeout: 10000,
      },
    );
  }, []);

  const CheckLocation = useCallback(() => {
    setLoading(true);
    check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(res => {
      if (res === RESULTS.BLOCKED || res === RESULTS.DENIED) {
        navigation.navigate('AcessLocation');
      } else {
        GetCurrentWeather();
      }
    });
  }, [GetCurrentWeather, navigation]);

  function FormatKelvin(kelvin: number) {
    return parseInt('10', kelvin - 273.15);
  }

  function FormatDate() {
    const newDate = new Date();

    const dayName = format(newDate, 'EEEE', {
      locale: pt,
    });

    const dayValue = format(newDate, "dd '/' MMMM", {
      locale: pt,
    });

    setDate({ dayName, dayValue });
  }

  useEffect(() => {
    FormatDate();
    CheckLocation();
  }, [CheckLocation]);

  return (
    <Container>
      {loading ? (
        <ContainerLoading>
          <ActivityIndicator size={70} color={colors.OrangePrimary} />
          <TextLoading>Atualizando as informações...</TextLoading>
        </ContainerLoading>
      ) : (
        <>
          <ViewHeader>
            <ButtomRefresh onPress={() => GetCurrentWeather()}>
              <Icon name="refresh" />
            </ButtomRefresh>
            <TextDate>{date?.dayName}</TextDate>
            <TextDate>{date?.dayValue}</TextDate>

            <TextDegrees>
              {`${currencyWeather.temp && FormatKelvin(currencyWeather.temp)}º`}
            </TextDegrees>

            <ViewRow>
              <Icon name="map-marker" />
              <TextCity isCity>
                {`${currencyWeather.locale && currencyWeather.locale}, `}
              </TextCity>
              <TextCity>
                {currencyWeather.country && currencyWeather.country}
              </TextCity>
            </ViewRow>
          </ViewHeader>
          <ViewCard>
            <CardInfo
              TextTitle="Temp. min"
              TextInfo={`${
                currencyWeather.temp_min &&
                FormatKelvin(currencyWeather.temp_min)
              }º`}
              isMarginBottom
            />
            <CardInfo
              TextTitle="Temp. max"
              TextInfo={`${
                currencyWeather.temp_max &&
                FormatKelvin(currencyWeather.temp_max)
              }º`}
              isMarginBottom
            />
            <CardInfo
              TextTitle="Umidade"
              TextInfo={`${
                currencyWeather.humidity && currencyWeather.humidity
              }%`}
              isMarginBottom
            />
            <CardInfo
              TextTitle="Pressão"
              TextInfo={`${
                currencyWeather.pressure && currencyWeather.pressure
              }hPa`}
              isMarginBottom
            />
            <CardInfo
              TextTitle="Velocidade do vento"
              TextInfo={`${currencyWeather.speed && currencyWeather.speed}Km/h`}
              isMarginBottom
            />
          </ViewCard>
        </>
      )}

      <Modal
        show={modalFalied}
        title="Atenção"
        description="Não foi possível pegar a localização do dispositivo, verifique se o GPS está ativo e tente novamente!"
        textSigleButton="Certo"
        actionSigleButton={() => {
          setLoading(true);
          GetCurrentWeather();
          setModalFalied(false);
        }}
      />
    </Container>
  );
};

export default Home;
