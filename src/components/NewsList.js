import React from 'react';
import cssmodules from 'react-css-modules';
import styles from 'styles/newslist.css';
import NewsRow from './NewsRow';


class NewsList extends React.Component {
  renderNews(){
    if(this.props.isLoading || !this.props.newsList) {
      return <div>Loading</div>
    }
    return ((this.props.newsList || {}).articles || []).map((news,ind) =>
          (<NewsRow news={news} key={ind}/>)
        );
  }
  render() {
    return (
      <div className="newsList">
        {this.renderNews()}
      </div>
    );
  }
}

NewsList.displayName = 'NewsList';
NewsList.propTypes = {};
NewsList.defaultProps = {};

export default cssmodules(NewsList, styles);
