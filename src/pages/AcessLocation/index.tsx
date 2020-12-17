import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import Buttom from '../../components/Buttom';

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

  const navigation = useNavigation();

  return (
    <ScrollView>
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
              navigation.navigate('Home');
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
