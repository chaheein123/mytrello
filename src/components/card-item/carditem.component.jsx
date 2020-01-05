import React from 'react';
import ContentEditable from 'react-contenteditable';
import uuid from "uuid/v4";

import "./carditem.styles.scss";

class CardItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content,
      editContent: false,
    };
  };

  clickEdit = () => {
    this.setState(
      {
        editContent: true,
      }
    );
  };

  render() {

    return (
      <div>
        {
          this.state.editContent ?
            <input type="text" />
            :
            <div className="carditem">
              <div
                className="card-item"
              >
                {this.props.content}
              </div>
              <div
                className="pencil-icon"
                onClick={this.clickEdit}
              >
              </div>

            </div>


        }
      </div>
    )
  }
}

export default CardItem;
