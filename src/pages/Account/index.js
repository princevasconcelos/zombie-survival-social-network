import React from 'react';
import t from 'prop-types';

// import Profile from '../../components/Profile';

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
      <span>
        {id ? 'Edit ' : 'Create '}
        Account
      </span>
    );
  }
}

export default Account;
