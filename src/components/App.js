import React from 'react';
import WidgetContainer from 'containers/WidgetContainer'
import 'styles/app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div >
        <WidgetContainer source="metro" title="Metro" sortBy="latest"/>
        <WidgetContainer source="espn-cric-info" title="espn-cric-info" sortBy="top"/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
