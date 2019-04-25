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
import Button from '../../components/Button';

class Trade extends React.Component {
  state = {
    yourName: '',
    yourId: '',
    offerItems: [],
    desiredItems: [],
    myWater: '',
    myFood: '',
    myMedication: '',
    myAmmunition: '',
    yourWater: '',
    yourFood: '',
    yourMedication: '',
    yourAmmunition: '',
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

    const [yourName, yourId] = pathname
      .split('/')
      .slice(-1)[0]
      .split('_');

    const response = await API.getItems(yourId);

    this.setState({
      yourName,
      yourId,
      offerItems: items,
      desiredItems: response,
    });
  }

  handleClose = () => {
    const { history } = this.props;
    history.goBack();
  };

  handleChange = (event) => {
    if (event.target.value.match(/\D+/g)) {
      return event.preventDefault();
    }
    return this.setState({ [event.target.name]: event.target.value });
  };

  getMyPayments = () => {
    const {
      myWater, myFood, myMedication, myAmmunition,
    } = this.state;

    return `Water:${+myWater};Food:${+myFood};Medication:${+myMedication};Ammunition:${+myAmmunition}`;
  };

  getMyPicks = () => {
    const {
      yourWater, yourFood, yourMedication, yourAmmunition,
    } = this.state;

    return `Water:${+yourWater};Food:${+yourFood};Medication:${+yourMedication};Ammunition:${+yourAmmunition}`;
  };

  handleConfirmTrade = async () => {
    const { yourId } = this.state;

    const {
      user: {
        data: { name },
      },
    } = this.props;

    const pick = this.getMyPicks();
    const payment = this.getMyPayments();

    const formData = new FormData();
    formData.append('consumer[name]', name);
    formData.append('consumer[pick]', pick);
    formData.append('consumer[payment]', payment);
    const response = await API.postTransaction(formData, yourId);
  };

  getPoints = items => items.reduce((prev, curr, i) => prev + curr * (4 - i), 0);

  render() {
    const {
      user: { loading },
    } = this.props;

    const {
      yourName,
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

    const myPoints = this.getPoints([myWater, myFood, myMedication, myAmmunition]);
    const yourPoints = this.getPoints([yourWater, yourFood, yourMedication, yourAmmunition]);

    if (!yourName) return <Loading />;
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
              <Button disabled={myPoints !== yourPoints} onClick={this.handleConfirmTrade}>
                confirm
              </Button>
              <Wrapper>
                <Inventory
                  readOnly
                  items={values.offerItems}
                  onChange={handleChange}
                  forObject="offerItems"
                  boxTitle="Your items"
                />
                <InputWrapper>
                  <ItemInput
                    type="tel"
                    name="myWater"
                    value={myWater}
                    onChange={this.handleChange}
                    placeholder="0"
                  />

                  <ItemInput
                    type="tel"
                    name="myFood"
                    value={myFood}
                    onChange={this.handleChange}
                    placeholder="0"
                  />

                  <ItemInput
                    type="tel"
                    name="myMedication"
                    value={myMedication}
                    onChange={this.handleChange}
                    placeholder="0"
                  />

                  <ItemInput
                    type="tel"
                    name="myAmmunition"
                    value={myAmmunition}
                    onChange={this.handleChange}
                    placeholder="0"
                  />
                </InputWrapper>
              </Wrapper>

              <Scoreboard>
                <Score>{myPoints}</Score>
                <Text>points</Text>
                <Score>{yourPoints}</Score>
              </Scoreboard>

              <Wrapper>
                <InputWrapper>
                  <ItemInput
                    type="tel"
                    name="yourWater"
                    value={yourWater}
                    onChange={this.handleChange}
                    placeholder="0"
                  />
                  <ItemInput
                    type="tel"
                    name="yourFood"
                    value={yourFood}
                    onChange={this.handleChange}
                    placeholder="0"
                  />
                  <ItemInput
                    type="tel"
                    name="yourMedication"
                    value={yourMedication}
                    onChange={this.handleChange}
                    placeholder="0"
                  />
                  <ItemInput
                    type="tel"
                    name="yourAmmunition"
                    value={yourAmmunition}
                    onChange={this.handleChange}
                    placeholder="0"
                  />
                </InputWrapper>

                <Inventory
                  readOnly
                  inverted
                  items={values.desiredItems}
                  onChange={handleChange}
                  forObject="desiredItems"
                  boxTitle={`${yourName} items`}
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
