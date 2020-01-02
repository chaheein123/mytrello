import React, { useState } from 'react';
import uuid from "uuid/v4";

import "./card.styles.scss";

import { CardItem } from "../card-item/carditem.component";
import { Draggable } from 'react-beautiful-dnd';

import { CARD_DATA } from "../../pages/TrelloCardsDataStructure/trellocardsdata";

export const Card = (props) => {

  const [newContent, setNewContent] = useState("");

  return (
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
        <div
          className="trello-card-add"
          onClick={() => {
            CARD_DATA[props.eachIndex]["items"].push({ id: uuid(), content: "" });

          }}
        >
          + Add another card
      </div>
      </div>
    </div>

  )

};
