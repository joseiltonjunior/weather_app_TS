import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PERMISSIONS, request, RESULTS, check } from 'react-native-permissions';
import { BackHandler } from 'react-native';

import Buttom from '../../components/Buttom';
import Modal from '../../components/ModalCustom';

import {
  Container,
  ScrollView,
  ViewText,
  Text,
  ViewIcons,
  IconPoint,
  IconCity,
  ViewButtom,
} from './styles';

const AcessLocation: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [modalBlock, setModalBlock] = useState(false);
  const [modalDenied, setModalDenied] = useState(false);
  const [modalExit, setModalExit] = useState(false);

  const navigation = useNavigation();

  function AllowLocation() {
    try {
      setLoading(true);
      check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(res => {
        if (res === RESULTS.GRANTED) {
          setLoading(false);
          navigation.navigate('Home');
        } else if (res === RESULTS.BLOCKED) {
          setLoading(false);
          setModalBlock(true);
        } else if (res === RESULTS.DENIED) {
          request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(resRequest => {
            if (resRequest === RESULTS.GRANTED) {
              setLoading(false);
              navigation.navigate('Home');
            } else {
              setLoading(false);
              setModalDenied(true);
            }
          });
        }
      });
    } catch (error) {
      setLoading(false);
      setModalDenied(true);
    }
  }

  useEffect(() => {
    const backAction = () => {
      setModalExit(true);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <ScrollView>
      <Modal
        title="Atenção"
        description="Acesso bloqueado"
        textSigleButton="OK"
        actionSigleButton={() => setModalBlock(false)}
        show={modalBlock}
      />

      <Modal
        title="Atenção"
        description="Acesso negado"
        textSigleButton="OK"
        actionSigleButton={() => setModalDenied(false)}
        show={modalDenied}
      />

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

      <Container>
        <ViewText>
          <Text>Precisamos da sua localização</Text>
          <Text isDescription>
            Permita o acesso a sua localização para definir com precissão o
            clima na sua região atual
          </Text>
        </ViewText>
        <ViewIcons>
          <IconPoint name="map-marker" />

          <IconCity />
        </ViewIcons>
        <ViewButtom>
          <Buttom
            loading={loading}
            onPress={() => {
              AllowLocation();
            }}
          >
            Permitir localização
          </Buttom>
        </ViewButtom>
      </Container>
    </ScrollView>
  );
};

export default AcessLocation;
