import React from 'react';
import { Formik } from 'formik';

import Form from './styles';
import Input from './Input';
import Select from './Select';
import Row from './Row';

const Profile = () => (
  <Formik
    initialValues={{
      name: '',
      age: '',
      genre: '',
      items: [],
      lonlat: {},
    }}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {({ values, handleSubmit, handleChange }) => (
      <Form onSubmit={handleSubmit}>
        <Input
          value={values.name}
          onChange={handleChange}
          label="Name"
          type="text"
          name="name"
          id="name"
        />
        <Row>
          <Input
            value={values.age}
            onChange={handleChange}
            label="Age"
            type="tel"
            name="age"
            id="age"
          />
          <Select />
        </Row>
        <button type="submit">Enviar</button>
      </Form>
    )}
  </Formik>
);

export default Profile;
