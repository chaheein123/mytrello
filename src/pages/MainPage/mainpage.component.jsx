import React, { useState, useRef } from 'react';

import "./mainpage.styles.scss";

import Card from "../../components/card/card.component";

import { CARD_DATA } from "../TrelloCardsDataStructure/trellocardsdata"

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip'

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: CARD_DATA,
      outsideClicked: false,
    };
  }

  onDragEnd = (result, theData) => {
    const { source, destination } = result;
    if (!source || !destination) return;
    if (source.droppableId == destination.droppableId && source.index == destination.index) return;

    else if (source.droppableId == destination.droppableId && source.index != destination.index) {
      for (let i = 0; i < theData.length; i++) {
        if (theData[i]["id"] == source.droppableId) {
          var droppableIndex = i;
          break;
        }
      }
      let takenout = theData[droppableIndex].items.splice(source.index, 1);
      takenout = takenout[0];
      theData[droppableIndex].items.splice(destination.index, 0, takenout);
    }

    else if (source.droppableId != destination.droppableId) {
      for (let i = 0; i < theData.length; i++) {
        if (theData[i]["id"] == source.droppableId) {
          var firstIndex = i;
          break;
        }
      }
      let takenout = theData[firstIndex].items.splice(source.index, 1);
      takenout = takenout[0];
      for (let j = 0; j < theData.length; j++) {
        if (theData[j]["id"] == destination.droppableId) {
          var secondIndex = j;
          break;
        }
      }
      theData[secondIndex].items.splice(destination.index, 0, takenout)
    }
  };

  render() {

    let cards = [...this.state.cards];
    return (

      <div className="main-page">
        <div
          className="main-page-nav"
          onClick={() =>
            this.setState({ outsideClicked: true })}
        >
          <h6>MyTrello</h6>
        </div>

        <div
          className="main-page-body"
        >
          <DragDropContext onDragEnd={result => this.onDragEnd(result, this.state.cards)}>

            {
              cards.map((card, index) => {
                return (
                  <Droppable droppableId={card.id} key={card.id}>
                    {(provided, snapshot) => {
                      return (

                        <div
                          className="card-wrapper"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                        >
                          <Card
                            key={card.id}
                            title={card.title}
                            cardItems={card.items}
                            id={card.id}
                            eachIndex={index}
                            outsideClicked={this.state.outsideClicked}
                          />
                          {provided.placeholder}
                        </div>
                      )
                    }}

                  </Droppable>

                )
              })
            }
          </DragDropContext>
        </div>
      </div>
    );
  };
};


export default MainPage;

function renderTooltip(props) {
  return <Tooltip {...props}>Simple tooltip</Tooltip>;
}

const Example = () => (
  <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip}
  >
    <Button variant="success">Hover me to see</Button>
  </OverlayTrigger>
);
