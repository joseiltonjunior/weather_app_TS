import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';

import Home from '../pages/Home';
import AcessLocation from '../pages/AcessLocation';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: colors.DarkGreyPrimary },
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="AcessLocation" component={AcessLocation} />
  </App.Navigator>
);

export default AppRoutes;
