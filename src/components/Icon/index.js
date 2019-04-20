import React from 'react';
import t from 'prop-types';

import Search from './svgs/search';
import Close from './svgs/close';

const propTypes = {
  name: t.string.isRequired,
};

const Icon = ({ name }) => {
  if (name === 'search') return <Search />;
  if (name === 'close') return <Close />;
  return <></>;
};

Icon.propTypes = propTypes;

export default Icon;
