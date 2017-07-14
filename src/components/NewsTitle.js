import React from 'react';
import cssmodules from 'react-css-modules';
import styles from 'styles/newstitle.css';

class NewsTitle extends React.Component {

  render() {
    return (
      <div className="news-title">
        {this.props.title}
      </div>
    );
  }
}

NewsTitle.displayName = 'NewsTitle';
NewsTitle.propTypes = {};
NewsTitle.defaultProps = {};

export default cssmodules(NewsTitle, styles);
