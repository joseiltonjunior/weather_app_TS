import styled from 'styled-components/native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import colors from '../../styles/colors';
import { responsiveSize } from '../../styles/responsive';

interface ITextCity {
  isCity?: boolean;
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

export const ViewHeader = styled.View`
  align-items: center;
  margin-top: ${responsiveSize(20)}px;
  width: 100%;
`;

export const ViewCard = styled.View`
  align-items: center;
  width: 100%;
  margin: ${responsiveSize(50)}px 0 ${responsiveSize(20)}px 0;
`;

export const TextCity = styled.Text<ITextCity>`
  font-family: ${props =>
    props.isCity ? 'RobotoSlab-SemiBold' : 'RobotoSlab-Regular'};
  font-size: ${responsiveSize(18)}px;
  color: ${colors.LightPrimary};
  opacity: 0.6;
`;

export const TextDegrees = styled.Text`
  font-family: 'RobotoSlab-ExtraBold';
  font-size: ${responsiveSize(70)}px;
  color: ${colors.OrangePrimary};
  margin: ${responsiveSize(30)}px 0;
`;

export const TextDate = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: ${responsiveSize(18)}px;
  color: ${colors.LightPrimary};
  text-transform: capitalize;
`;

export const TextLoading = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: ${responsiveSize(18)}px;
  color: ${colors.LightPrimary};
  margin-top: ${responsiveSize(18)}px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
`;

export const Icon = styled(AwesomeIcon).attrs({
  size: responsiveSize(25),
  color: colors.LightPrimary,
})`
  margin-right: ${responsiveSize(10)}px;
  opacity: 0.6;
`;

export const ButtomRefresh = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  align-self: flex-end;
  margin-right: ${responsiveSize(15)}px;
`;
