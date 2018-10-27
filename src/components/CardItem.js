import React from 'react';

const CardItem = ({ item, idx, visibleLength }) => (
  <li className="card" idx={idx}>
    <a href={`/curation/${item.groupId._id}`} className="wrapper">
      { idx <= visibleLength ?
      <img src={item.mainImage.url} alt={item.title} className="img banner"/> :
      <div className="blank banner">''</div>}
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