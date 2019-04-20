import styled from 'styled-components';

const Header = styled.header`
  height: 50px;
  font-size: 42px;
  font-weight: bold;
  border: 1px solid gray;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  padding: 16px 0;
  height: auto;
  border: 1px solid red;
`;

export { Header, Container };
