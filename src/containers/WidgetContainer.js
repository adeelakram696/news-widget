import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/';
import WidgetLayout from '../components/widgetLayout';

class WidgetContainer extends Component {
  render() {
    const { source, title, news } = this.props;
    return <WidgetLayout source={source} title={title} newsList={news.news[source]} isLoading={news.loading} />;
  }
  componentDidMount() {
    const { source, sortBy } = this.props;
    this.props.actions.fetchNews(source, sortBy);
    }
}

WidgetContainer.propTypes = {
  actions: PropTypes.shape({
    fetchNews: PropTypes.func.isRequired
  })
};

function mapStateToProps(state) {
  const props = {
    news: state.news
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(WidgetContainer);
