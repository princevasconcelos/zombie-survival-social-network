import styled from 'styled-components';

import styles from '../../utils/constraints';

const StyledSearch = styled.input`
  background-color: transparent;
  border: none;
  font-size: ${styles.sizes.xdefault};
  width: 100%;
  height: 100%;
  margin-left: 4px;

  color: ${styles.colors.black};

  ::placeholder {
    color: ${styles.colors.darkGray};
  }

  :focus {
    outline: none;

    ::placeholder {
      color: transparent;
    }
  }
`;

const Container = styled.div`
  display: flex;
  position: relative;
  cursor: text;
  flex: 1 1 auto;
  align-items: center;
  border: 1px solid ${styles.colors.lightestGray};
  height: 50px;
  border-radius: 8px;
  padding: 0 8px;
  margin: 0 16px;
  max-width: 430px;
  :hover {
    box-shadow: 0px 0px 3px ${styles.colors.darkGray};
  }
`;

const SearchResult = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -140px;
  left: 0px;
  width: 100%;
  height: 135px;
  background-color: ${styles.colors.lightestGray};
  z-index: 1;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: ${styles.sizes.small};
  @media (min-width: ${styles.screens.desktop}) {
    font-size: ${styles.sizes.default};
  }
`;

export {
  StyledSearch, Container, SearchResult, Block, Text,
};
