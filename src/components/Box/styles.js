import styled from 'styled-components';

import styles from '../../utils/constraints';

const Title = styled.h2`
  position: absolute;
  background-color: white;
  padding: 0 6px;
  top: -15px;
  left: 50%;
  margin-left: -50px;
  color: ${styles.colors.secondary};
`;

const Margin = styled.span`
  margin-left: 8px;
`;

const StyledBox = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  ${({ withBorder }) => withBorder
    && `
    border-top: 1px solid ${styles.colors.lightGray};

    @media (min-width: ${styles.screens.desktop}) {
      border: 1px solid ${styles.colors.lightGray};
    }
  `};
  padding: 16px 8px;
  margin-top: 16px;
  width: 100%;
`;

export { StyledBox, Title, Margin };
