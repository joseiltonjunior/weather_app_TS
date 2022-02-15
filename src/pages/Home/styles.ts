import styled from 'styled-components/native';

import colors from '~/styles/colors';
import { responsiveSize } from '~/styles/responsive';

interface ITextFooter {
  isName?: boolean;
}

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
  margin: ${responsiveSize(20)}px 0;
`;

export const ViewRow = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const TextLoading = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: ${responsiveSize(18)}px;
  color: ${colors.LightPrimary};
  margin-top: ${responsiveSize(18)}px;
`;

export const ViewFooter = styled.View`
  align-items: center;
  width: 100%;
  margin-bottom: ${responsiveSize(20)}px;
`;

export const TextFooter = styled.Text<ITextFooter>`
  font-family: ${props =>
    props.isName ? 'RobotoSlab-Bold' : 'RobotoSlab-Medium'};
  font-size: ${props =>
    props.isName ? responsiveSize(13) : responsiveSize(12)}px;
  color: ${props =>
    props.isName ? colors.LightPrimary : colors.DarkPlaceholders};
  text-align: center;
  /* margin-top: ${responsiveSize(18)}px; */
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
