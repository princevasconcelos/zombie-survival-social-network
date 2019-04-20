import styled from 'styled-components';

import styles from '../../../utils/constraints';

const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: 4px;

  padding: 0 12px;
  font-size: ${styles.sizes.large};
  color: ${styles.colors.black};

  ${({ readOnly }) => readOnly
    && `
    pointer-events: none;
    touch-action: none;
    -moz-appearance: window;
    -webkit-appearance: none;
  `}
`;

const StyledLabel = styled.label`
  position: absolute;
  background-color: ${styles.colors.white};
  font-size: ${styles.sizes.default};
  top: -10px;
  left: 12px;
  color: ${styles.colors.darkGray};
  padding: 0 4px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  margin-left: 12px;
`;
export { StyledSelect, StyledLabel, Container };
