import React from 'react';
import t from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';

import {
  StyledSearch, Container, SearchResult, Block, Text,
} from './styles';

import { saveQuery } from '../../stores/reducers/query';

import Icon from '../Icon';
import Loading from '../Loading';
import Error from '../Error';

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
      survivors: { data },
      saveQuery,
    } = this.props;
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
    const {
      query: {
        loading, error, name, age, gender, id, created_at, updated_at,
      },
    } = this.props;
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
        <SearchResult isVisible={showResults}>
          {loading && <Loading />}
          {error && <Error msg={`No match for ${name}`} />}
          {id && (
            <Block>
              <Text>{`Result for: "${name}"`}</Text>
              <Text>{`${age} years - ${gender === 'M' ? 'Male' : 'Female'}`}</Text>
              <Text>{`Created at: ${moment(created_at).format('DD/MM/YYYY')}`}</Text>
              <Text>{`Updated at: ${moment(updated_at).format('DD/MM/YYYY')}`}</Text>
            </Block>
          )}
          {!loading && !error && !id && <Text>Say my name</Text>}
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
