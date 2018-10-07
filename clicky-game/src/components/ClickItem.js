import React from 'react';
import '../styles/images.css';

const ClickItem = props => (
  <img
    onClick={() => props.handleClick(props.id)}
    src={props.image}
    alt="image"
    className="image"
  />
);

export default ClickItem;
