import styled from 'styled-components';

import styles from '../../../utils/constraints';

const base = styled.span`
  display: block;
  text-align: center;
`;

const Label = styled(base)``;

const Value = styled(base)`
  font-size: ${styles.sizes.medium};
  color: ${styles.colors.darkGray};
`;

const Item = styled.li`
  list-style-type: none;
  margin-bottom: 8px;
`;

export { Item, Label, Value };
