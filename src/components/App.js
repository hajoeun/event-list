import React, { Component, Fragment } from 'react';
import '../css/App.css';
import EventContainer from '../containers/EventContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <div className="header"></div>
        <div className="content">
          <EventContainer />
        </div>
        <div className="footer"></div>
      </Fragment>
    );
  }
}

export default App;
