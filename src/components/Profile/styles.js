import styled from 'styled-components';

import styles from '../../utils/constraints';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-top: 8px;

  small {
    margin-top: 2px;
    margin-left: 6px;
    color: ${styles.colors.red};
  }
`;

export default Form;
