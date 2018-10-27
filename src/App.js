import React, { Component, Fragment } from 'react';
import './css/App.css';
import CardItem from './components/CardItem';
// import fetchJsonp from 'fetch-jsonp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: null
    }
  }

  componentDidMount() {
    // window.callback = function(items) {
    //   console.log("============", items)
    // };
    // function get_jsonp(url) {
    //   return new Promise(function(resolve) {
    //     var script = document.createElement('script');
    //     script.src = url + '&callback=callback';
    //     script.onload = (res) => {
    //       console.log(res)
    //     }
    //     document.querySelector('body').appendChild(script);
    //     resolve();
    //   })
    // }
    // get_jsonp('https://api.ddocdoc.com/v2/eventBanner?populate=true').then(
    //   () => console.log("---------------")
    // );
    // window.json_result = function(res) {
    //   console.log(res)
    // }
    // fetchJsonp('https://api.ddocdoc.com/v2/eventBanner?populate=true', {
    //     jsonpCallbackFunction: 'json_result'
    //   })
    //   .then(res => res.json())
    //   .then(data => this.setState({ data }))
    fetch('https://api.ddocdoc.com/v2/eventBanner?populate=true')
      .then(res => res.json())
      .then(event => this.setState({ event }));
  }
  render() {

// active: true
// detailImage: {size: {…}, url: "https://cdn.ddocdoc.com/eventBanner/15460071827b7dbc9914c99c0.png"}
// endDate: null
// groupId: {_id: "5bcec35e62b6c70eb5b5ebeb", title: "다른덴 절대 없어! 오직 똑닥에만 있는 이벤트!", description: "똑닥 아니면 이런 이벤트 어디서 또 만나?"}
// mainImage: {size: {…}, url: "https://cdn.ddocdoc.com/eventBanner/154552616c1af33f52e91cdc9.png"}
// startDate: null
// title: "[오똑] 오직 똑닥에만 있는 시크릿 이벤트!"
// https://event.ddocdoc.com/curation/{curationID}

    return (
      <Fragment>
        <div className="header"></div>
        <div className="content">
          <ul>{this.state.event && this.state.event.items.map((item, i) =>
            <CardItem key={i} item={item}></CardItem>)}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default App;
