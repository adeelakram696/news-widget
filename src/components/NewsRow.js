import React from 'react';
import cssmodules from 'react-css-modules';
import styles from 'styles/newsrow.css';

class NewsRow extends React.Component {
  render() {
    const {
      title,
      author,
      description,
      publishedAt,
      urlToImage,
      url,
     } = this.props.news
    return (
      <div className="newsRow">
        <img src={urlToImage} className="news-image"/>
        <span className='news-row-title'>{title}</span>
        <a href={url} target="_blank" className='news-read-more'>Read More</a>
        <span className='news-description'>{description}</span>
      </div>
    );
  }
}

NewsRow.displayName = 'NewsRow';
NewsRow.propTypes = {};
NewsRow.defaultProps = {};

export default cssmodules(NewsRow, styles);
