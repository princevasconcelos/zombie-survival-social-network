import React from 'react';
import t from 'prop-types';

import Icon from '../Icon';

import { StyledBox, Title, FloatingIcon } from './styles';

const propTypes = {
  title: t.string.isRequired,
  children: t.element.isRequired,
  withBorder: t.bool,
  icon: t.string,
  link: t.string,
};

const defaultProps = {
  withBorder: false,
  icon: '',
  link: '',
};

const Box = ({
  title, children, withBorder, icon, link,
}) => (
  <StyledBox withBorder={withBorder}>
    {icon && link && (
      <FloatingIcon>
        <Icon name={icon} link={link} />
      </FloatingIcon>
    )}
    <Title>{title}</Title>
    {children}
  </StyledBox>
);

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
