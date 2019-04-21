import React from 'react';
import t from 'prop-types';

import Link from '../Link';

import Search from './svgs/search';
import Close from './svgs/close';
import Edit from './svgs/edit';

const propTypes = {
  name: t.string.isRequired,
  link: t.string,
};

const defaultProps = {
  link: '',
};

const getComponent = (name) => {
  if (name === 'search') return <Search />;
  if (name === 'close') return <Close />;
  if (name === 'edit') return <Edit />;
  return <></>;
};

const Icon = ({ name, link }) => {
  if (link) {
    return <Link to={link}>{getComponent(name)}</Link>;
  }
  return getComponent(name);
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
