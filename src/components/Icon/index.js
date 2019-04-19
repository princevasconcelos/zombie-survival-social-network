import React from 'react';
import t from 'prop-types';

import styles from '../../utils/constraints';

import Search from './svgs/search';

const propTypes = {
  name: t.string.isRequired,
  color: t.string,
};

const defaultProps = {
  color: styles.colors.blacker,
};

const Icon = ({ name, color }) => name === 'search' && <Search fill={color} />;

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
