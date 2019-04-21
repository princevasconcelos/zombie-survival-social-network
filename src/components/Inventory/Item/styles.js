import styled from 'styled-components';

import styles from '../../../utils/constraints';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;
  margin: 4px;
`;

const Name = styled.h3`
  font-size: ${styles.sizes.small};
  color: ${styles.colors.lightGray};
`;

const Value = styled.span`
  font-size: ${styles.sizes.xxlarge};
  color: ${styles.colors.black};
`;

export { Container, Name, Value };
