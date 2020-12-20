import styled from 'styled-components/native';

import colors from '../../styles/colors';
import { responsiveSize } from '../../styles/responsive';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ViewCard = styled.View`
  align-items: center;
  width: 100%;
  margin: ${responsiveSize(50)}px 0 ${responsiveSize(20)}px 0;
`;

export const TextLoading = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: ${responsiveSize(18)}px;
  color: ${colors.LightPrimary};
  margin-top: ${responsiveSize(18)}px;
`;

// Modal Buttom

export const ButtomModalButtom = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: ${responsiveSize(60)}px;

  justify-content: center;
`;

export const LineView = styled.View`
  width: 90%;
  height: ${responsiveSize(1)}px;
  background-color: ${colors.OrangePrimary};

  opacity: 0.5;
  align-self: center;
`;

export const TitleContent = styled.Text`
  color: ${colors.LightPrimary};
  font-size: ${responsiveSize(17)}px;
  font-family: 'RobotoSlab-Bold';
  margin-bottom: ${responsiveSize(5)}px;
  text-align: center;
`;

// End Modal Buttom
