import React from 'react';
import { SvgCss, XmlProps } from 'react-native-svg';

type IIconCustom = XmlProps;

const IconCustom: React.FC<IIconCustom> = ({ ...rest }) => {
  return <SvgCss {...rest} />;
};

export default IconCustom;
