import styled from 'styled-components/native';
// import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import colors from '../../styles/colors';
import { responsiveSize } from '../../styles/responsive';

interface IContainer {
  isMarginBottom?: boolean;
}

export const Container = styled.View<IContainer>`
  height: ${responsiveSize(50)}px;
  width: 90%;
  background: ${colors.OrangePrimary};
  border-radius: ${responsiveSize(25)}px;
  padding: 0 ${responsiveSize(25)}px;
  justify-content: center;
  margin-bottom: ${props =>
    props.isMarginBottom ? responsiveSize(15) : responsiveSize(0)}px;
`;

export const ViewText = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const TitleCard = styled.Text`
  font-family: 'RobotoSlab-Bold';
  font-size: ${responsiveSize(15)}px;
  align-self: flex-end;
`;
