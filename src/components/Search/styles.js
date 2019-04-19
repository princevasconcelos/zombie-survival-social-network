import styled from 'styled-components';
import styles from '../../utils/constraints';

const StyledSearch = styled.input`
  background-color: transparent;
  /* border: 1px solid ${styles.colors.black}; */
  border: none;
  font-size: 18px;
  margin-left: 8px;

  color: ${styles.colors.black};

  :focus {
    outline: none;
  }
`;

export const Container = styled.div`
  display: flex;
  background-color: ${styles.colors.lightestGray};
  padding: 10px;
  height: 50px;
  border-radius: 8px;
`;

export default StyledSearch;
