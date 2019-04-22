import styled from 'styled-components';

import styles from '../../utils/constraints';

const StyledButton = styled.button`
  cursor: pointer;
  height: 32px;
  min-width: 80px;
  background-color: transparent;
  color: ${({ color }) => styles.colors[color]};
  border: 1px solid ${({ color }) => styles.colors[color]};
  border-radius: 1000px;
  text-transform: uppercase;
  font-size: ${styles.sizes.small};
  font-weight: bold;

  :hover {
    background-color: ${({ color }) => styles.colors[color]};
    color: ${styles.colors.white};
  }

  :focus {
    outline: none;
  }
`;

export default StyledButton;
