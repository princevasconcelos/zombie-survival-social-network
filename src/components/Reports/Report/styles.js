import styled from 'styled-components';

import styles from '../../../utils/constraints';

const base = styled.span`
  display: block;
  text-align: center;
`;

const Label = styled(base)`
  font-weight: bold;
`;

const Value = styled(base)`
  background-color: greenyellow;
  font-family: 'Spicy Rice';
  font-size: ${styles.sizes.medium};
`;

const Item = styled.li`
  width: 100px;
  height: auto;
  list-style-type: none;
`;

export { Item, Label, Value };
