import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        { name: '홈', path: '/home', is_active: false },
        { name: '인기', path: '/pop', is_active: false },
        { name: '신규', path: '/new', is_active: false },
        { name: '시술별', path: '/category', is_active: false },
        { name: '기획전', path: '/curation', is_active: true }
      ]
    }
  }

  render() {
    return (
      <div className="header">
        <div className="navigation">
          <div className="logo"/>
          <div className="controls">
            <div className="search"/>
            <div className="wish_list"/>
          </div>
        </div>
        <div className="menu_bar">
          {this.state.menu.map((m, i) => (
            <a href={m.path} key={i} className={m.is_active ? 'active' : ''}>
              <span>{m.name}</span>
            </a>)
          )}
        </div>
      </div>
    )
  }
};

export default Header;