import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import weatherAppReducer from './reducers.js';

const reduxRouterMiddleware = routerMiddleware(browserHistory);

const enhancer = compose(
  applyMiddleware(
    reduxRouterMiddleware
  )
);

export default function weatherAppStore() {
  return createStore(
    combineReducers({
      weatherApp: weatherAppReducer,
      routing: routerReducer,
    }),
    {
      weatherApp: {
        recipes: null,
        isFetching: false,
        selectedRecipe: null,
        recipeListNeedsFetch: true,
        notifications: [],
      },
    },
    enhancer,
  );
}
