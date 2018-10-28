import React, { Component, Fragment } from 'react';
import '../css/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import EventContainer from '../containers/EventContainer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Body Contents={<EventContainer/>}/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
