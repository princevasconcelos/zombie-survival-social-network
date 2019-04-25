import styled from 'styled-components';

import styles from '../../utils/constraints';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Score = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  font-size: ${styles.sizes.xxlarge};
  color: ${styles.colors.black};
  box-shadow: 3px 3px 6px ${styles.colors.darkGray};
  margin: 16px;
  font-weight: bold;
`;

const Text = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: ${styles.sizes.xdefault};
  letter-spacing: 2px;
  font-weight: bold;
  color: gray;
`;

const Scoreboard = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  @media (min-width: ${styles.screens.desktop}) {
    max-width: 400px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 50px;
  font-size: ${styles.sizes.large};
  color: ${styles.colors.black};
  margin-top: 8px;
`;

const Floating = styled.div`
  display: ${({ isLoading }) => (isLoading ? 'none' : 'flex')};
  cursor: pointer;
  opacity: 0.3;
  width: 32px;
  height: 32px;
  :hover {
    opacity: 0.8;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 8px 0;

  @media (min-width: ${styles.screens.largePhone}) {
    max-width: 400px;
    justify-content: space-between;
  }

  @media (min-width: ${styles.screens.desktop}) {
    width: 100%;
    justify-content: space-evenly;
  }
`;

const ItemInput = styled.input`
  width: 70px;
  height: 50px;
`;

const Title = styled.span`
  text-align: center;
  padding: 0 60px;
`;

export {
  Container,
  Score,
  Text,
  Scoreboard,
  Wrapper,
  Header,
  Floating,
  Title,
  InputWrapper,
  ItemInput,
};
