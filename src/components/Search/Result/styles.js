import styled from 'styled-components';

import styles from '../../../utils/constraints';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: ${styles.sizes.small};
  @media (min-width: ${styles.screens.desktop}) {
    font-size: ${styles.sizes.default};
  }
`;

export { Block, Text };
