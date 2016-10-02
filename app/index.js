import ReactDOM from 'react-dom';
import { createApp } from './app.js';
require('./scss/styles.scss');

// Initialize the control app and render it.
const app = createApp();
ReactDOM.render(
  app.rootComponent,
  document.querySelector('#page-container')
);
