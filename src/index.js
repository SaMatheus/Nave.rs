import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import EditProvider from './contexts/EditContext';

ReactDOM.render(
  <EditProvider>
    <App />
  </EditProvider>,
  document.getElementById('root')
);
