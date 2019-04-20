import styled from 'styled-components';

import styles from '../../../utils/constraints';

const StyledSelect = styled.select`
  width: 100%;
  flex-grow: 1;
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: 4px;
  margin-left: 12px;
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

export default StyledSelect;
