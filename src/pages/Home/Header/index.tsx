import React from 'react';

import {
  ViewHeader,
  ButtomRefresh,
  Icon,
  TextDate,
  ViewRow,
  TextCity,
  TextDegrees,
  ViewDegrees,
} from './styles';

interface IHeader {
  dayText: string;
  dayValue: string;
  monthText: string;
  tempText: string;
  cityText: string;
  countryText: string;
  onAction: any;
  description: string;
}

const Header: React.FC<IHeader> = ({
  // dayText,
  dayValue,
  monthText,
  tempText,
  cityText,
  // countryText,
  description,
  onAction,
}) => {
  function formartDescription(value: string) {
    if (value === 'clear sky') {
      return 'Céu limpo';
    }
    if (value === 'few clouds') {
      return 'Poucas nuvens';
    }
    if (value === 'scattered clouds') {
      return 'Nuvens dispersas';
    }

    return true;
  }

  return (
    <ViewHeader>
      <ButtomRefresh
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        onPress={onAction}
      >
        <Icon name="navicon" />
      </ButtomRefresh>

      <ViewRow>
        <Icon name="map-marker" />
        <TextCity>{cityText}</TextCity>
      </ViewRow>

      <ViewDegrees>
        <TextDegrees>{`${tempText}°`}</TextDegrees>
        <TextCity>{formartDescription(description)}</TextCity>
      </ViewDegrees>

      <TextDate>Hoje</TextDate>
      <ViewRow>
        <TextDate noCapitalize>{`${dayValue} de `}</TextDate>
        <TextDate>{monthText}</TextDate>
      </ViewRow>
    </ViewHeader>
  );
};

export default Header;
