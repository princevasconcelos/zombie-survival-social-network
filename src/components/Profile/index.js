import React from 'react';
import t from 'prop-types';
import { Formik } from 'formik';

import Form from './styles';
import Input from './Input';
import Select from './Select';
import Row from './Row';

const genres = [{ name: 'Male', value: 'M' }, { name: 'Female', value: 'F' }];

const propTypes = {
  readOnly: t.bool,
};

const defaultProps = {
  readOnly: false,
};

const Profile = ({ readOnly }) => (
  <Formik
    initialValues={{
      name: '',
      age: '',
      genre: 'M',
      items: [],
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
      </Form>
    )}
  </Formik>
);

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
