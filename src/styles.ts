import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import colors from './styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.DarkGreyPrimary};
`;

export const BarStatus = styled(StatusBar).attrs({
  barStyle: 'light-content',
  backgroundColor: colors.DarkGreyPrimary,
})``;
