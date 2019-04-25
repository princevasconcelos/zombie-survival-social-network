import React from 'react';
import t from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';

import API from '../../services/api';

import {
  Container,
  Score,
  Text,
  Scoreboard,
  Wrapper,
  Header,
  Floating,
  Title,
  InputWrapper,
  ItemInput,
} from './styles';

import Inventory from '../../components/Inventory';
import Icon from '../../components/Icon';
import Loading from '../../components/Loading';

class Trade extends React.Component {
  state = {
    name: '',
    offerItems: [],
    desiredItems: [],
  };

  static propTypes = {
    user: t.shape({
      data: t.shape({
        items: t.arrayOf(t.object),
      }),
    }).isRequired,
    survivors: t.shape({
      data: t.array,
    }).isRequired,

    location: t.shape({
      pathname: t.string,
    }).isRequired,
    history: t.shape({
      history: t.func,
    }).isRequired,
  };

  async componentDidMount() {
    const {
      user: {
        data: { items },
      },
      location: { pathname },
    } = this.props;

    const [name, id] = pathname
      .split('/')
      .slice(-1)[0]
      .split('_');

    const response = await API.getItems(id);

    console.log(items);
    this.setState({
      name,
      offerItems: items,
      desiredItems: response,
    });
  }

  handleClose = () => {
    const { history } = this.props;
    history.goBack();
  };

  getPoints = items => items
    .filter(e => !!e.quantity)
    .reduce((prev, curr) => prev + +curr.quantity * curr.item.points, 0);

  render() {
    const {
      user: { loading },
    } = this.props; // remover items

    const { name, desiredItems, offerItems } = this.state;

    if (!name) return <Loading />;
    return (
      <Formik
        initialValues={{
          offerItems,
          desiredItems,
        }}
      >
        {({ values, handleChange }) => (
          <>
            {/* <Header>
              <Title>Trade</Title>
              <Floating onClick={this.handleClose} isLoading={loading}>
                <Icon name="close" />
              </Floating>
            </Header> */}
            <Container>
              <Wrapper>
                <Inventory
                  readOnly
                  items={values.offerItems}
                  onChange={handleChange}
                  forObject="offerItems"
                  boxTitle="Your items"
                />
                <InputWrapper>
                  <ItemInput type="text" />
                  <ItemInput type="text" />
                  <ItemInput type="text" />
                  <ItemInput type="text" />
                </InputWrapper>
              </Wrapper>

              <Scoreboard>
                <Score>{this.getPoints(values.offerItems)}</Score>
                <Text>points</Text>
                <Score>{this.getPoints(values.desiredItems)}</Score>
              </Scoreboard>

              <Wrapper>
                <InputWrapper>
                  <ItemInput type="text" />
                  <ItemInput type="text" />
                  <ItemInput type="text" />
                  <ItemInput type="text" />
                </InputWrapper>

                <Inventory
                  readOnly
                  inverted
                  items={values.desiredItems}
                  onChange={handleChange}
                  forObject="desiredItems"
                  boxTitle={`${name} items`}
                />
              </Wrapper>
            </Container>
          </>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = ({ user, survivors }) => ({
  user,
  survivors,
});

export default withRouter(connect(mapStateToProps)(Trade));
