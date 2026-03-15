import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import dashboard from './reducers';

it('renders without crashing', () => {
  const store = createStore(dashboard);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
