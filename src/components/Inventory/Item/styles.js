import styled from 'styled-components';

import styles from '../../../utils/constraints';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
  border: 4px solid white;
`;

const Name = styled.h3`
  font-size: 14px;
  color: lightgray;
`;

const Value = styled.span`
  font-size: 50px;
  color: ${styles.colors.black};
`;

export { Container, Name, Value };
