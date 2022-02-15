import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { responsiveSize } from '~/styles/responsive';
import colors from '~/styles/colors';

export const Container = styled(RectButton)`
  width: 90%;
  height: ${responsiveSize(55)}px;
  background-color: ${colors.OrangePrimary};
  border-radius: ${responsiveSize(10)}px;
  justify-content: center;
  align-self: center;
  margin-top: ${responsiveSize(8)}px;
`;

export const TextButtom = styled.Text`
  font-family: 'RobotoSlab-Bold';
  color: ${colors.DarkGreyPrimary};
  font-size: ${responsiveSize(16)}px;
  text-align: center;
`;
