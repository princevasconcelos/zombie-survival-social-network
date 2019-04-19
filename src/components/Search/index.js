import React from 'react';

import StyledSearch, { Container } from './styles';

import Icon from '../Icon';

class Search extends React.Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => value && this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Container>
        <Icon name="search" />
        <StyledSearch placeholder="Search" onChange={this.handleChange} />
      </Container>
    );
  }
}

export default Search;
