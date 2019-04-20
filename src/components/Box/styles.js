import styled from 'styled-components';

import styles from '../../utils/constraints';

const Title = styled.h2`
  position: absolute;
  background-color: white;
  padding: 0 6px;
  top: -15px;
  left: 50%;
  margin-left: -50px;
`;

const StyledBox = styled.section`
  position: relative;
  width: 100%;
  ${({ withBorder }) => withBorder
    && `
    border-top: 1px solid ${styles.colors.gray};

    @media (min-width: ${styles.screens.desktop}) {
      border: 1px solid ${styles.colors.gray};
    }
  `};
  padding: 16px 8px;
  margin-top: 8px;
`;

export { StyledBox, Title };
