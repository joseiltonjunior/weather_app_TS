import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Routes from './routes';

import './config/ReactotronConfig';

import { Container, BarStatus } from './styles';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BarStatus />
      <Container>
        <Routes />
      </Container>
    </NavigationContainer>
  );
};

const OverlayApp = console.tron.overlay(App);

export default OverlayApp;
