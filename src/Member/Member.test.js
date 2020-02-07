import React from 'react';
import ReactDOM from 'react-dom';
import Member from './Member';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let members=[]
  ReactDOM.render(<Member members={members}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});