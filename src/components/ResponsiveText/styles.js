import styled from 'styled-components';
import styles from '../../utils/constraints';

const ShortText = styled.span`
  display: block;

  @media (min-width: ${styles.screens.tablet}) {
    display: none;
  }
`;

const LongText = styled.span`
  display: none;

  @media (min-width: ${styles.screens.tablet}) {
    display: block;
  }
`;

const Wrapper = styled.div`
  font-family: 'Spicy Rice';
  color: ${({ color }) => color && styles.colors[color]};
  font-size: ${({ size }) => size && styles.sizes[size]};
`;

export { ShortText, LongText, Wrapper };
