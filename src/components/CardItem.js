import React from 'react';

const CardItem = ({ item }) => (
  <li className="card">
    <a href={`/curation/${item.groupId._id}`} className="wrapper">
      <img src={item.mainImage.url} alt={item.title} className="banner_img"/>
      <div className="card_footer">
        <h5 className="title">{item.title}</h5>
        <div className="sub_title">
          <span className="menu_title">기획전</span>
          <span className="partition"> | </span>
          <span className="description">{item.groupId.description}</span>
        </div>
      </div>
    </a>
  </li>
);

export default CardItem;