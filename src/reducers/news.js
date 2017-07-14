import { FETCH_NEWS, LOADING, UPDATE_NEWS }from '../actions/const';

const initialState = {
  news: {},
  loading:true,
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  let nextState = Object.assign({}, state);

  switch(action.type) {
    case LOADING: {
      nextState.loading = true;
      return nextState;
    }
    case UPDATE_NEWS: {
      nextState.news[action.newsData.source] = action.newsData;
      nextState.loading = false;
      return nextState;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
