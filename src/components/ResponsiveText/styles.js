import styled from 'styled-components';
import styles from '../../utils/constraints';

const StyledText = styled.span`
  ${({ zombie }) => zombie
    && `
    font-family: 'Spicy Rice';
    font-size: ${styles.sizes.xlarge};
    color: ${styles.colors.primary};
  `}
`;

export default StyledText;
