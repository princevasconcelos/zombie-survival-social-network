import React from 'react';
import t from 'prop-types';

import { ShortText, LongText, Wrapper } from './styles';

const propTypes = {
  short: t.string.isRequired,
  long: t.string.isRequired,
  color: t.string,
  size: t.string,
};

const defaultProps = {
  color: 'black',
  size: 'default',
};

const ResponsiveText = ({
  short, long, color, size,
}) => (
  <Wrapper color={color} size={size}>
    <ShortText>{short}</ShortText>
    <LongText>{long}</LongText>
  </Wrapper>
);

ResponsiveText.propTypes = propTypes;
ResponsiveText.defaultProps = defaultProps;

export default ResponsiveText;
