import React from 'react';
import ReactDOM from 'react-dom';
import Member from './Member';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Member />, div);
  ReactDOM.unmountComponentAtNode(div);
});