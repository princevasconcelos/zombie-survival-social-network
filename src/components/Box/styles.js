import styled from 'styled-components';

import styles from '../../utils/constraints';

const Title = styled.h2`
  display: block;
  margin: 0 auto;
  position: absolute;
  background-color: white;
  padding: 0 6px;
  ${({ inverted }) => (inverted ? 'bottom: -15px;' : 'top: -15px;')};
  color: ${styles.colors.darkGray};
`;

const Margin = styled.span`
  margin-left: 8px;
`;

const StyledBox = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  ${({ withBorder, inverted }) => withBorder
    && `

    ${
  inverted
    ? `
      border-bottom: 1px solid ${styles.colors.lightGray};
    `
    : `
      border-top: 1px solid ${styles.colors.lightGray};
    `
}


    @media (min-width: ${styles.screens.desktop}) {
      border: 1px solid ${styles.colors.lightGray};
    }
  `};

  ${({ inverted }) => (inverted
    ? `
      padding: 0 8px 16px;
      margin-bottom: 32px;
    `
    : `
      padding: 16px 8px 0;
      margin-top: 32px;
    `)};

  ${({ margin }) => margin && `margin: ${margin}`};
  width: 100%;
`;

export { StyledBox, Title, Margin };
