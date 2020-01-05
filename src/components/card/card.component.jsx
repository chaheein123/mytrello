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
      inputValue: "",
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

          {
            this.state.addCardClicked ?
              <div className="add-card-wrapper">
                <textarea
                  className="trello-card-new"
                  autoFocus={true}
                  onChange={(event) => this.setState(
                    { inputValue: event.target.value }
                  )}
                  value={this.state.inputValue}
                  placeholder="Enter text here"
                />

                <Button
                  variant="success"
                  className="add-button"
                  onClick={() => {
                    CARD_DATA[this.props.eachIndex]["items"].push({
                      id: uuid(),
                      content: this.state.inputValue
                    });
                    this.setState({ inputValue: "", addCardClicked: false })
                  }}
                >
                  Add Card
                </Button>
                <button
                  className="close-button-space"
                  onClick={() => this.setState(
                    { addCardClicked: false },
                    this.setState({ inputValue: "" })
                  )}
                >
                  <span className="close-button">X</span>
                </button>
              </div>
              :
              <div
                className="trello-card-add"
                onClick={() =>
                  this.setState({ addCardClicked: true })
                }
              >
                + Add another card
              </div>
          }
        </div>
      </div>
    )
  };
};

export default Card;
