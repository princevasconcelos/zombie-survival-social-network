import styled from 'styled-components';
import { Link } from 'react-router-dom';

import styles from '../../utils/constraints';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${styles.colors.black};
  font-weight: bold;

  :hover {
    color: ${styles.colors.secondary};
  }
`;

export default StyledLink;
