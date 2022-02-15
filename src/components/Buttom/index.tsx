import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';

import colors from '~/styles/colors';

import { Container, TextButtom } from './styles';

interface ButtomProps extends RectButtonProperties {
  children: string;
  loading: boolean;
}

const Buttom: React.FC<ButtomProps> = ({ children, loading, ...rest }) => (
  <Container {...rest}>
    {loading ? (
      <ActivityIndicator size="small" color={colors.DarkGreyPrimary} />
    ) : (
      <TextButtom>{children}</TextButtom>
    )}
  </Container>
);

export default Buttom;
