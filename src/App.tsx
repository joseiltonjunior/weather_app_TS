import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Routes from './routes';

import { Container, BarStatus } from './styles';

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <BarStatus />
      <Container>
        <Routes />
      </Container>
    </NavigationContainer>
  );
};

export default src;
