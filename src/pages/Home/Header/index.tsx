import React from 'react';

import {
  ViewHeader,
  ButtomRefresh,
  Icon,
  TextDate,
  ViewRow,
  TextCity,
  TextDegrees,
} from './styles';

interface IHeader {
  dayText: string;
  dayValue: string;
  monthText: string;
  tempText: string;
  cityText: string;
  countryText: string;
  onAction: any;
}

const Header: React.FC<IHeader> = ({
  dayText,
  dayValue,
  monthText,
  tempText,
  cityText,
  countryText,
  onAction,
}) => {
  return (
    <ViewHeader>
      <ButtomRefresh
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        onPress={onAction}
      >
        <Icon name="navicon" />
      </ButtomRefresh>
      <TextDate>{dayText}</TextDate>
      <ViewRow>
        <TextDate noCapitalize>{`${dayValue} de `}</TextDate>
        <TextDate>{monthText}</TextDate>
      </ViewRow>
      <TextDegrees>{`${tempText}º`}</TextDegrees>

      <ViewRow>
        <Icon name="map-marker" />
        <TextCity>{`${cityText}, `}</TextCity>
        <TextCity isCountry>{countryText}</TextCity>
      </ViewRow>
    </ViewHeader>
  );
};

export default Header;
