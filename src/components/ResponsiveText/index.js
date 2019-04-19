import React from 'react';
import t from 'prop-types';

import isMobile from '../../utils/functions';

import StyledText from './styles';

const propTypes = {
  forSmallScreen: t.string.isRequired,
  forLargeScreen: t.string.isRequired,
  zombie: t.bool,
};

const defaultProps = {
  zombie: false,
};

const ResponsiveText = ({ forSmallScreen, forLargeScreen, zombie }) => (
  <StyledText zombie={zombie}>{isMobile() ? forSmallScreen : forLargeScreen}</StyledText>
);

ResponsiveText.propTypes = propTypes;
ResponsiveText.defaultProps = defaultProps;

export default ResponsiveText;
