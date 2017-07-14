import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import {LOADING} from '../actions/const';

const initialState = {
  type: LOADING,
}

const createStoreWithMiddleware = compose(
  // Save for redux middleware
  applyMiddleware(thunkMiddleware)
)(createStore);

export default function reduxStore() {
  const store = createStoreWithMiddleware(rootReducer, {});


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
