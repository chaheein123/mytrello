import React, { useState } from 'react';
import uuid from "uuid/v4";

import "./card.styles.scss";

import { CardItem } from "../card-item/carditem.component";
import { Draggable } from 'react-beautiful-dnd';

import { CARD_DATA } from "../../pages/TrelloCardsDataStructure/trellocardsdata";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardData: CARD_DATA[this.props.eachIndex]["items"]
    }
  };

  render() {

    return (
      <div className="trello-card">
        <div className="trello-card-flex">
          <div className="trello-card-headers">
            <h2>{this.props.title}</h2>
          </div>
          {
            this.props.cardItems.map((cardItem, index) => {
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
              this.setState({ cardData: CARD_DATA[this.props.eachIndex]["items"].push({ id: uuid(), content: "" }) })
            }}
          >
            + Add another card
        </div>
        </div>
      </div>
    )
  };



};

export default Card;
