import React, { Component, Fragment } from 'react';
import './css/App.css';
import CardItem from './components/CardItem';
// import fetchJsonp from 'fetch-jsonp';

class App extends Component {
  constructor(props) {
    super(props);
    this.visibleSize = 4;
    this.state = {
      items: null,
      visibleLength: (this.visibleSize * 2),
      itemsLength: 0
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
      .then(event => this.setState({ items: event.items, itemsLength: event.items.length }))
      .then(() => {
        window.addEventListener('scroll', () => {
          const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
          const percent = scrollTop / (scrollHeight - clientHeight);
          const updatePosition = (this.state.visibleLength / this.state.itemsLength) - 0.1;

          if (percent > updatePosition) {
            this.setState(prev => {
              const visibleLength = prev.visibleLength + (prev.visibleLength > prev.itemsLength ? 0 : this.visibleSize);
              return { visibleLength };
            })
          }

        });
      });
  }
  render() {
    return (
      <Fragment>
        <div className="header"></div>
        <div className="content">
          <ul>{this.state.items && this.state.items.map((item, i) =>
            <CardItem key={i} item={item} idx={i} visibleLength={this.state.visibleLength}></CardItem>)}
          </ul>
        </div>
        <div className="footer"></div>
      </Fragment>
    );
  }
}

export default App;
