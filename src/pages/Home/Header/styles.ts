import styled from 'styled-components/native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import colors from '../../../styles/colors';
import { responsiveSize } from '../../../styles/responsive';

interface ITextCity {
  isCountry?: boolean;
}

interface ITextDate {
  noCapitalize?: boolean;
}

export const ViewHeader = styled.View`
  align-items: center;
  margin-top: ${responsiveSize(20)}px;
  width: 100%;
`;

export const TextCity = styled.Text<ITextCity>`
  font-family: ${props =>
    props.isCountry ? 'RobotoSlab-SemiBold' : 'RobotoSlab-Regular'};
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

export const TextDate = styled.Text<ITextDate>`
  font-family: 'RobotoSlab-Medium';
  font-size: ${responsiveSize(18)}px;
  color: ${colors.LightPrimary};
  text-transform: ${props => (props.noCapitalize ? 'none' : 'capitalize')};
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
