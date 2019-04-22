import React from 'react';
import t from 'prop-types';
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
};

const defaultProps = {
  readOnly: false,
  boxTitle: '',
};

const Profile = ({ readOnly, boxTitle }) => (
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
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {({ values, handleSubmit, handleChange }) => (
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
        <Inventory
          boxTitle={boxTitle}
          items={values.items}
          onChange={handleChange}
          readOnly={readOnly}
        />
      </Form>
    )}
  </Formik>
);

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
