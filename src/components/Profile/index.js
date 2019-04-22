import React from 'react';
import t from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';

import Inventory from '../Inventory';

import Form from './styles';
import Input from './Input';
import Select from './Select';
import Row from './Row';

const genres = [{ name: 'Male', value: 'M' }, { name: 'Female', value: 'F' }];

const propTypes = {
  readOnly: t.bool,
  boxTitle: t.string,
  onHandleSubmit: t.func,
};

const defaultProps = {
  readOnly: false,
  boxTitle: '',
  onHandleSubmit: () => {},
};

const ProfileSchema = yup.object().shape({
  name: yup.string().required('Required'),
  age: yup
    .number()
    .positive('Must be positive')
    .required('Required'),
  items: yup
    .object({
      Water: yup.string().matches(/\w*/),
      Food: yup.string().matches(/\w*/),
      Medication: yup.string().matches(/\w*/),
      Ammunition: yup.string().matches(/\w*/),
    })
    .test(
      'at-least-one-number',
      'You must provide at least one',
      value => !!(value.Water || value.Food || value.Medication || value.Ammunition),
    ),
});

const Profile = ({ readOnly, boxTitle, onHandleSubmit }) => (
  <Formik
    initialValues={{
      name: '',
      age: '',
      genre: 'M',
      items: {
        Water: '',
        Food: '',
        Medication: '',
        Ammunition: '',
      },
      lonlat: {},
    }}
    validationSchema={ProfileSchema}
    onSubmit={onHandleSubmit}
  >
    {({
      values, errors, handleSubmit, handleChange,
    }) => (
      <Form onSubmit={handleSubmit} id="profile-form">
        <Input
          value={values.name}
          onChange={handleChange}
          label="Name"
          type="text"
          name="name"
          id="name"
          readOnly={readOnly}
        />
        {errors.name && <small>Name is required</small>}
        <Row>
          <Input
            value={values.age}
            onChange={handleChange}
            label="Age"
            type="tel"
            name="age"
            id="age"
            readOnly={readOnly}
          />
          <Select onChange={handleChange} options={genres} readOnly={readOnly} />
        </Row>
        {errors.age && <small>Age is required</small>}
        <Inventory
          boxTitle={boxTitle}
          items={values.items}
          onChange={handleChange}
          readOnly={readOnly}
        />
        {errors.items && <small>{errors.items}</small>}
      </Form>
    )}
  </Formik>
);

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
