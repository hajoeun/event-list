import React, { Component } from 'react';
import EventItem from '../components/EventItem';

class EventContainer extends Component {
  constructor(props) {
    super(props);
    this.visibleDiff = 4;
    this.visibleInit = 8;
    this.state = {
      items: null,
      visibleLength: this.visibleInit,
      itemsLength: 0
    }
  }
  componentDidMount() {
    fetch('https://api.ddocdoc.com/v2/eventBanner?populate=true',)
      .then(res => res.json())
      .then(event => this.setState({ items: event.items, itemsLength: event.items.length }));
    window.addEventListener('scroll', () => {
      if (this.checkPosition() && this.checkState()) {
        this.setVisibleLength();
      }
    })
  }

  checkPosition = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const viewPosition = scrollTop / (scrollHeight - clientHeight);
    const updatePosition = (this.state.visibleLength / this.state.itemsLength) - 0.1;
    return viewPosition > updatePosition;
  };
  checkState = () =>
    this.state.visibleLength < this.state.itemsLength;
  setVisibleLength = () =>
    this.setState(prev => ({ visibleLength: prev.visibleLength + this.visibleDiff }));

  render() {
    const { items, visibleLength } = this.state;
    return (
      <ul>
        {items && items.map((item, i) =>
          <EventItem key={i} item={item} idx={i} visibleLength={visibleLength}/>
        )}
      </ul>
    )
  }
}

export default EventContainer;