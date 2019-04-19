import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Search from '../../components/Search';

describe('<Search />', () => {
  test('typing should change inputs value', () => {
    const { getByTestId } = render(<Search />);

    const searchInput = getByTestId(/search/i);

    const query = 'nirvana';

    expect(searchInput.value).toEqual('');

    fireEvent.change(searchInput, { target: { value: query } });

    expect(searchInput.value).toEqual(query);
  });
});
