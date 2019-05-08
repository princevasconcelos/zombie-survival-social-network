import React from 'react';
import { fireEvent, render } from 'react-testing-library';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from '../../stores/reducers';

import Search from '../../components/Search';

describe('<Search />', () => {
  const renderWithRedux = (
    ui,
    { initialState, store = createStore(rootReducer, initialState) } = {},
  ) => ({
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  });

  it('should change inputs value when user input', () => {
    const { getByTestId } = renderWithRedux(<Search />);
    const searchInput = getByTestId(/search/i);
    const query = 'nirvana';
    expect(searchInput.value).toEqual('');
    fireEvent.change(searchInput, { target: { value: query } });
    expect(searchInput.value).toEqual(query);
  });
});
