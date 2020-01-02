import React from 'react';

import "./carditem.styles.scss";

export const CardItem = (props) => (

  <div
    className="card-item"
    onClick={e => console.log("ggiggity")}
  >
    {props.content}
  </div>

);
