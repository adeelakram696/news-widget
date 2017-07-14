import React from 'react';
import cssmodules from 'react-css-modules';
import styles from 'styles/widgetlayout.css';
import NewsTitle from './NewsTitle';
import NewsList from './NewsList';


class WidgetLayout extends React.Component {

  render() {
    const {title, newsList, isLoading} = this.props;
    return (
      <div className="widgetlayout">
        <NewsTitle title={title} />
        <NewsList newsList={newsList} isLoading = {isLoading}/>
      </div>
    );
  }
}

WidgetLayout.displayName = 'WidgetLayout';
WidgetLayout.propTypes = {};
WidgetLayout.defaultProps = {};

export default cssmodules(WidgetLayout, styles);
