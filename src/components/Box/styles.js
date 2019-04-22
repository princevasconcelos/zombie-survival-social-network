import styled from 'styled-components';

import styles from '../../utils/constraints';

const Title = styled.h2`
  display: block;
  margin: 0 auto;
  position: absolute;
  background-color: white;
  padding: 0 6px;
  top: -15px;
  color: ${styles.colors.darkGray};
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
  padding: 16px 8px 0;
  margin-top: 32px;
  width: 100%;
`;

export { StyledBox, Title, Margin };
