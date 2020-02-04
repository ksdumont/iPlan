import React from 'react';
import ReactDOM from 'react-dom';
import TripHomePage from './TripHomePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TripHomePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});