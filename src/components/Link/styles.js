import styled from 'styled-components';
import { Link } from 'react-router-dom';

import styles from '../../utils/constraints';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${styles.colors.black};
  font-weight: bold;

  ${({ full }) => full
    && `
    display: flex;
    width: 100%;
    height: 100%
  `};

  ${({ hovereefect }) => hovereefect === 'true'
    && `
    :hover {
      box-shadow: inset 0 -2px ${styles.colors.blacker};
      padding: 29px 0;
    }
  `}
`;

export default StyledLink;
