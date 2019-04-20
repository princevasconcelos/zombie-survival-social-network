import styled from 'styled-components';

import styles from '../../../utils/constraints';

const StyledLabel = styled.label`
  position: absolute;
  background-color: ${styles.colors.white};
  font-size: ${styles.sizes.large};
  padding: 0 4px;
  top: 16px;
  left: 12px;
  transition: all 0.2s;
  color: ${styles.colors.darkGray};

  ${({ stayAbove }) => stayAbove
    && `
      top: -10px;
      font-size: ${styles.sizes.default};
  `}
`;

const StyledInput = styled.input`
  width: 100%;
  flex: 1;
  border-radius: 4px;
  border: 1px solid lightgray;
  padding: 16px;
  font-size: ${styles.sizes.large};
  color: ${styles.colors.black};

  :focus {
    ~ label {
      top: -10px;
      font-size: ${styles.sizes.default};
    }
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
`;

export { StyledInput, StyledLabel, Container };
