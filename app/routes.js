import React from 'react';
import { Route } from 'react-router';
import WeatherApp from './components/WeatherApp.js';
import Settings from './components/Settings.js';
import Router from 'react-router';

export default (
  <Route name="app" path="/" component={WeatherApp}>
    <Route name="settings" path="/settings" handler={Settings}/>
  </Route>
);
