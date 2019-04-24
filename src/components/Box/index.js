import React from 'react';
import t from 'prop-types';

import Icon from '../Icon';

import { StyledBox, Title, Margin } from './styles';

const propTypes = {
  title: t.string.isRequired,
  children: t.oneOfType([t.element.isRequired, t.arrayOf(t.element)]).isRequired,
  withBorder: t.bool,
  inverted: t.bool,
  icon: t.string,
  link: t.string,
  margin: t.string,
};

const defaultProps = {
  withBorder: false,
  inverted: false,
  icon: '',
  link: '',
  margin: '',
};

const Box = ({
  title, children, withBorder, icon, link, margin, inverted,
}) => (
  <StyledBox withBorder={withBorder} margin={margin} inverted={inverted}>
    <Title inverted={inverted}>
      {title}

      {icon && link && (
        <Margin>
          <Icon name={icon} link={link} />
        </Margin>
      )}
    </Title>
    {children}
  </StyledBox>
);

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
