import React from 'react';

import "./mainpage.styles.scss";

import { Card } from "../../components/card/card.component";

import { CARD_DATA } from "../TrelloCardsDataStructure/trellocardsdata"

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // cards: CARD_DATA,
      cards: CARD_DATA
    };

    // console.log("This is the card data", CARD_DATA);
  }

  render() {

    let cards = [...this.state.cards];
    return (
      <div className="main-page">

        <div className="main-page-nav">
          <h6>MyTrello</h6>
        </div>

        <div className="main-page-body">
          {
            cards.map((card) => {
              return (<Card
                key={card.id}
                title={card.title}
                cardItems={card.items}
              />)
            })
          }
        </div>
      </div>
    );
  };
};

export default MainPage;
