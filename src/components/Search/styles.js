import styled from 'styled-components';
import styles from '../../utils/constraints';

const StyledSearch = styled.input`
  background-color: ${styles.colors.lightestGray};
  /* border: 1px solid ${styles.colors.black}; */
  border: none;
  height: 50px;
  font-size: 18px;
  color: ${styles.colors.black};
  padding: 10px;

  ::placeholder {
  }
`;

export default StyledSearch;
