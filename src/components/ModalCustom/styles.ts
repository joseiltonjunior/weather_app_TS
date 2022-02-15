import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { responsiveSize } from '~/styles/responsive';
import colors from '~/styles/colors';

interface ITextButtons {
  textLight?: boolean;
}

const DEVICE_WIDTH = Dimensions.get('window').width;

export const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerBottom = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  flex: 1;
  justify-content: flex-end;
`;

export const Content = styled.View``;

export const Touch = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
  justify-content: center;
  align-items: center;
  flex: 1;
  width: ${DEVICE_WIDTH}px;
`;

export const Card = styled.View.attrs({
  shadowColor: colors.DarkGreyPrimary,
  shadowOffset: { width: 0, height: responsiveSize(3) },
  shadowOpacity: 1,
  shadowRadius: 4,
  elevation: 5,
})`
  width: 85%;
  background-color: ${colors.DarkGreyPrimary};
  border-radius: ${responsiveSize(10)}px;
  padding: ${responsiveSize(20)}px;
  justify-content: center;
  align-self: center;
`;

export const CardBottom = styled.View.attrs({
  shadowColor: colors.DarkGreyPrimary,
  shadowOffset: { width: 0, height: responsiveSize(3) },
  shadowOpacity: 1,
  shadowRadius: 4,
  elevation: 5,
})`
  width: 100%;
  background-color: ${colors.DarkGreyPrimary};
  border-top-left-radius: ${responsiveSize(30)}px;
  border-top-right-radius: ${responsiveSize(30)}px;
`;

export const TextTitle = styled.Text`
  font-family: 'RobotoSlab-Bold';
  font-size: ${responsiveSize(18)}px;
  color: ${colors.OrangePrimary};
  align-self: center;
  text-align: center;
  margin-bottom: ${responsiveSize(20)}px;
`;

export const TextInfo = styled.Text`
  color: ${colors.LightPrimary};
  font-family: 'RobotoSlab-Regular';
  font-size: ${responsiveSize(16)}px;
  text-align: center;
`;

export const ButtonSingle = styled.TouchableOpacity`
  width: 90%;
  height: ${responsiveSize(50)}px;
  background-color: ${colors.OrangePrimary};
  border-radius: ${responsiveSize(10)}px;
  align-self: center;
  margin-top: ${responsiveSize(30)}px;
  justify-content: center;
`;

export const ButtonYes = styled.TouchableOpacity`
  width: ${responsiveSize(120)}px;
  height: ${responsiveSize(50)}px;
  background-color: ${colors.LightPrimary};
  border-radius: ${responsiveSize(10)}px;
  margin-left: ${responsiveSize(10)}px;
  justify-content: center;
`;

export const ButtonNo = styled.TouchableOpacity`
  width: ${responsiveSize(120)}px;
  height: ${responsiveSize(50)}px;
  background-color: ${colors.RedPrimary};
  border-radius: ${responsiveSize(10)}px;
  margin-right: ${responsiveSize(10)}px;
  justify-content: center;
`;

export const ViewButtons = styled.View`
  flex-direction: row;
  margin-top: ${responsiveSize(30)}px;
  align-self: center;
`;

export const TextButtons = styled.Text<ITextButtons>`
  align-self: center;
  font-family: 'RobotoSlab-SemiBold';
  font-size: ${responsiveSize(16)}px;
  color: ${props =>
    props.textLight ? colors.LightPrimary : colors.DarkGreyPrimary};
`;

export const ModalView = styled.Modal``;
