import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';

import { StyledSearch, Container, SearchResult } from './styles';

import { saveQuery } from '../../stores/reducers/query';

import Icon from '../Icon';

class Search extends React.Component {
  state = {
    value: '',
    showResults: false,
  };

  static propTypes = {
    saveQuery: t.func.isRequired,

    survivors: t.shape({
      data: t.array,
    }).isRequired,
  };

  handleChange = ({ target: { value } }) => {
    const {
      survivors: { data },
      saveQuery,
    } = this.props;
    if (!value) return;
    saveQuery({ query: value, data });
    this.setState({ value });
  };

  handleFocus = () => {
    this.setState({ showResults: true });
  };

  handleBlur = () => {
    this.setState({ showResults: false });
  };

  render() {
    const { value, showResults } = this.state;
    return (
      <Container>
        <Icon name="search" />
        <StyledSearch
          data-testid="search"
          value={value}
          placeholder="Search"
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <SearchResult isVisible={showResults}>data</SearchResult>
      </Container>
    );
  }
}

const mapStateToProps = ({ survivors }) => ({
  survivors,
});

export default connect(
  mapStateToProps,
  {
    saveQuery,
  },
)(Search);
