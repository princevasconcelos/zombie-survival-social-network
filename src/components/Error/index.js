import React from 'react';
import t from 'prop-types';

const propTypes = {
  msg: t.string,
};

const defaultProps = {
  msg: 'Ocorreu um erro, tente novamente',
};

const Error = ({ msg }) => <span>{msg}</span>;

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;

export default Error;
