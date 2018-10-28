import React, { Component } from 'react';
import EventItem from '../components/EventItem';
// import { pipe, go } from '../js/functions';
// import fetchJsonp from 'fetch-jsonp';

class EventContainer extends Component {
  constructor(props) {
    super(props);
    this.visibleSize = 4;
    this.visibleInit = 8;
    this.state = {
      items: null,
      visibleLength: this.visibleInit,
      itemsLength: 0
    }
  }
  componentDidMount() {
    fetch('https://api.ddocdoc.com/v2/eventBanner?populate=true')
      .then(res => res.json())
      .then(event => this.setState({ items: event.items, itemsLength: event.items.length }))
      .then(() => {
        window.addEventListener('scroll', () => {
          if (this.checkPosition() && this.checkState())
            this.setVisibleLength();
        })
      });
  }

  checkPosition = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const viewPosition = scrollTop / (scrollHeight - clientHeight);
    const updatePosition = (this.state.visibleLength / this.state.itemsLength) - 0.1;
    return viewPosition > updatePosition;
  };
  checkState = () => this.state.visibleLength < this.state.itemsLength;
  setVisibleLength = () => {
    this.setState(prev => {
      const visibleLength = prev.visibleLength + this.visibleSize;
      return { visibleLength };
    })
  };

  render() {
    const { items, visibleLength } = this.state;
    return (
      <ul>{items && items.map((item, i) =>
        <EventItem key={i} item={item} idx={i} visibleLength={visibleLength}></EventItem>)}
      </ul>
    )
  }
}

export default EventContainer;