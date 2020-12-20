/* eslint-disable radix */
/* eslint-disable import/no-duplicates */
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, ScrollView } from 'react-native';
import { format } from 'date-fns';
import { pt } from 'date-fns/locale';
import Geolocation from '@react-native-community/geolocation';
import { BackHandler } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../../styles/colors';
import api from '../../services/consultWeatherApi';
import CardInfo from '../../components/Card';
import Modal from '../../components/ModalCustom';
import Header from './Header';

import {
  Container,
  ContainerLoading,
  ViewCard,
  TextLoading,
  ButtomModalButtom,
  TitleContent,
  LineView,
} from './styles';

interface IDate {
  dayName?: string;
  dayValue?: string;
  monthValue?: string;
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
  const [modalMenu, setModalMenu] = useState(false);
  const [modalExit, setModalExit] = useState(false);

  const navigation = useNavigation();

  const GetCurrentWeather = useCallback(() => {
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
      () => {
        setModalFalied(true);
      },
      {
        timeout: 10000,
      },
    );
  }, []);

  const CheckLocation = useCallback(async () => {
    setLoading(true);
    const value = await AsyncStorage.getItem('acessLocation');
    if (value !== null) {
      GetCurrentWeather();
    } else {
      navigation.navigate('AcessLocation');
    }
  }, [navigation, GetCurrentWeather]);

  function FormatKelvin(kelvin: number) {
    return parseInt('10', kelvin - 273.15);
  }

  function FormatDate() {
    const newDate = new Date();

    const dayName = format(newDate, 'EEEE', {
      locale: pt,
    });

    const dayValue = format(newDate, 'dd', {
      locale: pt,
    });

    const monthValue = format(newDate, 'MMMM', {
      locale: pt,
    });

    setDate({ dayName, dayValue, monthValue });
  }

  useEffect(() => {
    FormatDate();
    CheckLocation();
  }, [CheckLocation]);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
    >
      <Container>
        {loading ? (
          <ContainerLoading>
            <ActivityIndicator size={70} color={colors.OrangePrimary} />
            <TextLoading>Atualizando as informações...</TextLoading>
          </ContainerLoading>
        ) : (
          <>
            <Header
              dayText={String(date?.dayName)}
              dayValue={String(date?.dayValue)}
              monthText={String(date?.monthValue)}
              tempText={String(
                currencyWeather.temp && FormatKelvin(currencyWeather.temp),
              )}
              cityText={String(
                currencyWeather.locale && currencyWeather.locale,
              )}
              countryText={String(
                currencyWeather.country && currencyWeather.country,
              )}
              onAction={() => {
                setModalMenu(true);
              }}
            />

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
                TextInfo={`${
                  currencyWeather.speed && currencyWeather.speed
                }Km/h`}
                isMarginBottom
              />
            </ViewCard>
          </>
        )}

        <Modal
          show={modalFalied}
          title="Atenção"
          description="Não foi possível pegar a localização do dispositivo, tente novamente."
          textSigleButton="Certo"
          actionSigleButton={() => {
            setLoading(true);
            GetCurrentWeather();
            setModalFalied(false);
          }}
        />

        <Modal isBottomModal show={modalMenu}>
          <ButtomModalButtom
            onPress={() => {
              GetCurrentWeather();
              setModalMenu(false);
            }}
          >
            <TitleContent>Atualizar dados</TitleContent>
          </ButtomModalButtom>
          <LineView />

          <ButtomModalButtom
            onPress={() => {
              setModalMenu(false);
            }}
          >
            <TitleContent>Voltar</TitleContent>
          </ButtomModalButtom>
          <LineView />

          <ButtomModalButtom
            onPress={() => {
              setModalMenu(false);
              setModalExit(true);
            }}
          >
            <TitleContent>Sair</TitleContent>
          </ButtomModalButtom>
        </Modal>

        <Modal
          title="Atenção"
          description="Você realmente deseja sair?"
          textSigleButton="OK"
          twoButtons
          textNoButton="Sim"
          actionNoButton={() => {
            setModalExit(false);
            BackHandler.exitApp();
          }}
          textYesButton="Não"
          actionYesButton={() => setModalExit(false)}
          show={modalExit}
        />
      </Container>
    </ScrollView>
  );
};

export default Home;
