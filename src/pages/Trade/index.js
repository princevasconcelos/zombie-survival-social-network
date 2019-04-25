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
    myWater: 0,
    myFood: 0,
    myMedication: 0,
    myAmmunition: 0,
    yourWater: 0,
    yourFood: 0,
    yourMedication: 0,
    yourAmmunition: 0,
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

  handleChange = event => this.setState({ [event.target.name]: event.target.value });

  getPoints = items => items.reduce((prev, curr, i) => prev + curr * (4 - i), 0);

  render() {
    const {
      user: { loading },
    } = this.props;

    const {
      name,
      offerItems,
      desiredItems,
      myWater,
      myFood,
      myMedication,
      myAmmunition,
      yourWater,
      yourFood,
      yourMedication,
      yourAmmunition,
    } = this.state;

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
            <Container>
              <Header>
                <Title>
                  Trade
                  <Floating onClick={this.handleClose} isLoading={loading}>
                    <Icon name="close" />
                  </Floating>
                </Title>
              </Header>
              <button>salvar</button>
              <Wrapper>
                <Inventory
                  readOnly
                  items={values.offerItems}
                  onChange={handleChange}
                  forObject="offerItems"
                  boxTitle="Your items"
                />
                <InputWrapper>
                  <ItemInput type="tel" name="myWater" onChange={this.handleChange} />
                  <ItemInput type="tel" name="myFood" onChange={this.handleChange} />
                  <ItemInput type="tel" name="myMedication" onChange={this.handleChange} />
                  <ItemInput type="tel" name="myAmmunition" onChange={this.handleChange} />
                </InputWrapper>
              </Wrapper>

              <Scoreboard>
                <Score>{this.getPoints([myWater, myFood, myMedication, myAmmunition])}</Score>
                <Text>points</Text>
                <Score>
                  {this.getPoints([yourWater, yourFood, yourMedication, yourAmmunition])}
                </Score>
              </Scoreboard>

              <Wrapper>
                <InputWrapper>
                  <ItemInput type="tel" name="yourWater" onChange={this.handleChange} />
                  <ItemInput type="tel" name="yourFood" onChange={this.handleChange} />
                  <ItemInput type="tel" name="yourMedication" onChange={this.handleChange} />
                  <ItemInput type="tel" name="yourAmmunition" onChange={this.handleChange} />
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
