import React from 'react';

import "./card.styles.scss";

import { CardItem } from "../card-item/carditem.component";

export const Card = (props) => (
  <div className="trello-card">
    <div className="trello-card-flex">
      <div className="trello-card-headers">
        <h2>{props.title}</h2>
      </div>
      {
        props.cardItems.map((cardItem) => {
          return (
            <CardItem
              content={cardItem.content}
            />
          )
        }
        )
      }
      <div className="trello-card-add">
        + Add another card
      </div>
    </div>
  </div>
);
