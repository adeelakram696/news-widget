import React from 'react';
import WidgetContainer from 'containers/WidgetContainer'
import 'styles/app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div >
        <WidgetContainer
          source="metro"
          title="Metro"
          sortBy="latest"
          refreshTime={20000}
        />
        <WidgetContainer
          source="espn-cric-info"
          title="ESPN Cric Info"
          sortBy="top"
          refreshTime={10000}
        />
        <WidgetContainer
          source="mashable"
          title="Mashable"
          sortBy="latest"
          refreshTime={15000}
        />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
