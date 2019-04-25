import styled from 'styled-components';

import styles from '../../../utils/constraints';

const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  overflow: hidden;
  padding: 0 10px;

  :not(:last-child) {
    margin-bottom: 8px;
  }

  :hover {
    ${({ isInfected }) => !isInfected && `background-color: ${styles.colors.lightestGray};`}
  }

  box-shadow: inset 0px -1px 0px ${styles.colors.lightGray};
`;

const Symbol = styled.span`
  font-size: ${styles.sizes.xxlarge};
  font-weight: 100;
  margin-right: 8px;
`;

const Bio = styled.span`
  min-width: 45px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: ${styles.sizes.xdefault};

  color: ${styles.colors.darkGray};
  font-weight: bold;
`;

const Name = styled.span`
  height: 100%;
  width: 100%;
  color: ${styles.colors.black};
  font-size: ${styles.sizes.xxdefault};
  margin-left: 6px;
  padding: 20px 0;
`;

export {
  Item, Name, Bio, Symbol,
};
