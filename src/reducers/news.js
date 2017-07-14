import { FETCH_NEWS, LOADING, UPDATE_NEWS }from '../actions/const';

const initialState = {
  news: {},
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case LOADING: {
      return nextState;
    }
    case UPDATE_NEWS: {
      nextState.news[action.newsData.source] = action.newsData;
      return nextState;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
