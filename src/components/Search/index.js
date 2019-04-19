import React from 'react';

import StyledSearch from './styles';

class Search extends React.Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => value && this.setState({ value });

  render() {
    const { value } = this.state;
    return <StyledSearch placeholder="Search" onChange={this.handleChange} />;
  }
}

export default Search;
