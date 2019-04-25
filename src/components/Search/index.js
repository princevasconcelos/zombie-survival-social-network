import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';

import { StyledSearch, Container, SearchResult } from './styles';

import { saveQuery } from '../../stores/reducers/query';

import Icon from '../Icon';

import Result from './Result';

class Search extends React.Component {
  state = {
    showResults: false,
  };

  static propTypes = {
    saveQuery: t.func.isRequired,

    survivors: t.shape({
      data: t.array,
    }).isRequired,

    query: t.shape({
      loading: t.bool,
      error: t.bool,
      name: t.string,
      age: t.number,
      gender: t.string,
      id: t.string,
      created_at: t.string,
      updated_at: t.string,
    }).isRequired,
  };

  handleChange = ({ target: { value } }) => {
    const {
      saveQuery,
      survivors: { data },
    } = this.props;

    saveQuery({ query: value, data });
  };

  handleFocus = () => {
    this.setState({ showResults: true });
  };

  handleBlur = () => {
    this.setState({ showResults: false });
  };

  render() {
    const {
      query: {
        loading, error, name, age, gender, id, created_at, updated_at,
      },
    } = this.props;
    const { showResults } = this.state;
    return (
      <Container>
        <Icon name="search" />
        <StyledSearch
          data-testid="search"
          placeholder="Search"
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <SearchResult isVisible={showResults}>
          <Result
            loading={loading}
            error={error}
            id={id}
            name={name}
            age={age}
            gender={gender}
            create={created_at}
            update={updated_at}
          />
        </SearchResult>
      </Container>
    );
  }
}

const mapStateToProps = ({ survivors, query }) => ({
  survivors,
  query,
});

export default connect(
  mapStateToProps,
  {
    saveQuery,
  },
)(Search);
