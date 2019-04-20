import React from 'react';
import t from 'prop-types';

import { Container, Header } from './styles';

import Profile from '../../components/Profile';
import Icon from '../../components/Icon';

class Account extends React.Component {
  state = {
    id: '',
  };

  static propTypes = {
    match: t.shape({
      params: t.objectOf(t.string),
    }).isRequired,
  };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    if (id) this.setState({ id });
  }

  render() {
    const { id } = this.state;
    return (
      <Container>
        <Header>
          {id ? 'Edit ' : 'New '}
          Survivor
          <Icon name="close" />
        </Header>
        <Profile />
      </Container>
    );
  }
}

export default Account;
