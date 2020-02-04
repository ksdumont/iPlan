import React from 'react';
import ReactDOM from 'react-dom';
import AddTaskForm from './AddTaskForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTaskForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});