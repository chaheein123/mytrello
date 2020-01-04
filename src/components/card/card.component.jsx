import React, { useState } from 'react';
import uuid from "uuid/v4";
import Button from 'react-bootstrap/Button'

import "./card.styles.scss";

import CardItem from "../card-item/carditem.component";
import { Draggable } from 'react-beautiful-dnd';

import { CARD_DATA } from "../../pages/TrelloCardsDataStructure/trellocardsdata";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardData: CARD_DATA[this.props.eachIndex]["items"],
      addCardClicked: false,
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
                          outsideClicked={this.props.outsideClicked}
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

            onClick={() => {
              if (this.state.addCardClicked) {
                this.setState({ addCardClicked: false })
              }
              else {
                this.setState({ addCardClicked: true })
              }
            }}
          >
            {
              this.state.addCardClicked ?
                (
                  <div className="add-card-wrapper">
                    <input
                      className="trello-card-new card-item carditem"
                      autoFocus={true}
                    />

                    <Button variant="success" className="add-button">
                      Add Card
                    </Button>
                    <button
                      className="close-button-space"
                      onClick={() => {
                        // this.setState(
                        //   { addCardClicked: false }
                        // )
                      }}
                    >
                      <span className="close-button">X</span>
                    </button>



                  </div>
                )
                :
                (
                  <div className="trello-card-add">
                    + Add another card
                  </div>
                )
            }

          </div>
        </div>
      </div>
    )
  };



};

export default Card;
