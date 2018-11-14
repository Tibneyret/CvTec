import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { register } from './serviceWorker';
import Router from './routes/router';

render(
  <Router />,
  document.getElementById('root')
);

register();