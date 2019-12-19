import React from 'react';

import "./carditem.styles.scss";

export const CardItem = (props) => (

  <div
    className="card-item"
    contentEditable="true"
  >
    {props.content}
  </div>

)