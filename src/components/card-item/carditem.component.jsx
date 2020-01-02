import React from 'react';
import ContentEditable from 'react-contenteditable';

import "./carditem.styles.scss";

export const CardItem = (props) => (

  // <div
  //   className="card-item"
  // >
  //   {props.content}
  // </div>

  <ContentEditable
    className="card-item"
    disabled={false}
    html={props.content}
  // onChange={}
  />


);
