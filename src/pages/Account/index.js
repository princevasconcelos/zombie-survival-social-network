import React from 'react';
import t from 'prop-types';

import { Container, Header, Floating } from './styles';

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
    history: t.shape({
      history: t.func,
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

  handleClose = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { id } = this.state;
    return (
      <Container>
        <Header>
          {id ? 'Edit ' : 'New '}
          Survivor
          <Floating onClick={this.handleClose}>
            <Icon name="close" />
          </Floating>
        </Header>
        <Profile />
      </Container>
    );
  }
}

export default Account;
