import React from 'react';

import "./card.styles.scss";

import { CardItem } from "../card-item/carditem.component";
import { Draggable } from 'react-beautiful-dnd';

export const Card = (props) => (
  <div className="trello-card">
    <div className="trello-card-flex">
      <div className="trello-card-headers">
        <h2>{props.title}</h2>
      </div>
      {
        props.cardItems.map((cardItem, index) => {
          return (
            <Draggable key={cardItem.id} draggableId={cardItem.id} index={index}>
              {(provided, snapshot) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <CardItem
                      content={cardItem.content}
                    />
                  </div>
                )
              }}
            </Draggable>
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