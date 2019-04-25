import React from 'react';
import moment from 'moment';
import t from 'prop-types';

import Loading from '../../Loading';
import Error from '../../Error';

import { Text, Block } from './styles';

const propTypes = {
  loading: t.bool,
  error: t.bool,
  id: t.string,
  age: t.number,
  name: t.string,
  gender: t.string,
  create: t.string,
  update: t.string,
};

const defaultProps = {
  loading: false,
  error: false,
  id: '',
  age: 0,
  name: '',
  gender: '',
  create: '',
  update: '',
};

const Result = ({
  loading, error, id, name, age, gender, create, update,
}) => {
  if (loading) return <Loading />;
  if (error) return <Error msg="No match found" />;
  if (!id) return <Text>Say my name</Text>;
  return (
    <Block>
      <Text>{`Result for: "${name}"`}</Text>
      <Text>{`${age} years - ${gender === 'M' ? 'Male' : 'Female'}`}</Text>
      <Text>{`Created at: ${moment(create).format('DD/MM/YYYY')}`}</Text>
      <Text>{`Updated at: ${moment(update).format('DD/MM/YYYY')}`}</Text>
    </Block>
  );
};
Result.propTypes = propTypes;
Result.defaultProps = defaultProps;

export default Result;
