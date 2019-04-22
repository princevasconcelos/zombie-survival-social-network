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
  apiErrors: t.objectOf(t.array),
};

const defaultProps = {
  readOnly: false,
  boxTitle: '',
  onHandleSubmit: () => {},
  apiErrors: {},
};

const ProfileSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  age: yup.string().required('Age is required'),
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

const Profile = ({
  readOnly, boxTitle, onHandleSubmit, apiErrors,
}) => (
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
      values, touched, errors, handleSubmit, handleBlur, handleChange,
    }) => (
      <Form onSubmit={handleSubmit} id="profile-form">
        <Input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          label="Name"
          type="text"
          name="name"
          id="name"
          readOnly={readOnly}
        />
        {!readOnly && errors.name && touched.name && <small>{errors.name}</small>}
        {!readOnly && apiErrors && apiErrors.name && <small>{apiErrors.name}</small>}

        <Row>
          <Input
            value={values.age}
            onChange={(event) => {
              if (event.target.value.match(/\D+/g)) {
                return event.preventDefault();
              }
              return handleChange(event);
            }}
            onBlur={handleBlur}
            label="Age"
            type="tel"
            name="age"
            id="age"
            readOnly={readOnly}
          />
          <Select onChange={handleChange} options={genres} readOnly={readOnly} />
        </Row>
        {!readOnly && errors.age && touched.age && <small>{errors.age}</small>}
        <Inventory
          boxTitle={boxTitle}
          items={values.items}
          onChange={handleChange}
          onBlur={handleBlur}
          readOnly={readOnly}
        />
        {!readOnly && errors.items && touched.items && <small>{errors.items}</small>}
      </Form>
    )}
  </Formik>
);

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
