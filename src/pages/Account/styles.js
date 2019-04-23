import styled from 'styled-components';

import styles from '../../utils/constraints';

const Header = styled.header`
  height: 50px;
  text-align: center;
  font-size: ${styles.sizes.large};
  color: ${styles.colors.black};
  margin-bottom: 16px;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;

  padding: 16px 0;
  height: auto;
`;

const Floating = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'none' : 'flex')};
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 8px;
  opacity: 0.3;
  width: 32px;
  height: 32px;

  :hover {
    opacity: 1;
  }
`;

export { Header, Container, Floating };
