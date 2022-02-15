import styled from 'styled-components/native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { responsiveSize } from '~/styles/responsive';
import colors from '~/styles/colors';
import IconCustom from '~/components/IconCustom';
import iconCity from '~/assets/city.svg';

interface IText {
  isDescription?: boolean;
}

export const Container = styled.View``;

export const ScrollView = styled.ScrollView.attrs({
  flexGrow: 1,
  justifyContent: 'center',
})``;

export const ViewText = styled.View`
  padding: 0 ${responsiveSize(20)}px;
  margin-top: ${responsiveSize(20)}px;
`;

export const Text = styled.Text<IText>`
  font-family: ${props =>
    props.isDescription ? 'RobotoSlab-Regular' : 'RobotoSlab-Bold'};
  font-size: ${props =>
    props.isDescription ? responsiveSize(14) : responsiveSize(23)}px;
  color: ${colors.LightPrimary};
  margin-bottom: ${props =>
    props.isDescription ? responsiveSize(40) : responsiveSize(20)}px;
  text-align: center;
`;

export const ViewIcons = styled.View`
  align-items: center;
  margin-bottom: ${responsiveSize(50)}px;
`;

export const IconPoint = styled(AwesomeIcon).attrs({
  size: responsiveSize(60),
  color: colors.OrangePrimary,
})`
  margin-bottom: ${responsiveSize(20)}px;
`;

export const IconCity = styled(IconCustom).attrs({
  xml: iconCity,
  width: responsiveSize(120),
  height: responsiveSize(120),
})``;

export const ViewButtom = styled.View`
  margin-bottom: ${responsiveSize(20)}px;
`;
