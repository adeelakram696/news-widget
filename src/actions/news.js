import { FETCH_NEWS, LOADING, UPDATE_NEWS } from './const';
import FetchNewsSource from '../sources/fetchNewsSource.js'

function loading(){
  return {type:LOADING};
}
function updateNews(newsData){
  return {type:UPDATE_NEWS, newsData}
}
export default function fetchNews(source, sortBy) {
  return (dispatch) => {
    dispatch(loading());
    FetchNewsSource(source, sortBy).then((response) => {
      dispatch(updateNews(response));
    })
  }
}

