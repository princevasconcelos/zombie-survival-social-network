import styled from 'styled-components';
import styles from '../../utils/constraints';

const StyledSearch = styled.input`
  background-color: transparent;
  border: none;
  font-size: 18px;
  width: 100%;
  margin-left: 4px;

  color: ${styles.colors.black};

  :focus {
    outline: none;

    ::placeholder {
      color: transparent;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  border: 1px solid ${styles.colors.lightestGray};
  height: 50px;
  border-radius: 8px;
  padding: 0 8px;
  margin: 0 16px;
  max-width: 430px;
`;

export default StyledSearch;
