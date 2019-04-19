import styled from 'styled-components';

import styles from '../../utils/constraints';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  box-shadow: inset 0px -1px 0px ${styles.colors.gray};
`;

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 16px;
`;

export default StyledHeader;
