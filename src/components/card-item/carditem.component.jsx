import React from 'react';
import ContentEditable from 'react-contenteditable';
import uuid from "uuid/v4";

import "./carditem.styles.scss";

class CardItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disableContent: true,
      // outsideClicked: this.props.outsideClicked
      content: this.props.content

    };
  };

  clickEdit = () => {
    this.setState({ disableContent: false });

  };

  clickSave = () => {
    this.setState({ disableContent: true });
  }

  render() {

    return (
      <div className="carditem">
        <ContentEditable
          className="card-item"
          disabled={this.state.disableContent}
          html={this.props.content}
          onChange={() => console.log("changeD!!!!")}
        />

        {
          this.state.disableContent ?
            <div
              className="card-item-editable editable-option"
              onClick={this.clickEdit}
            >
              Edit
            </div> :
            <div
              className="card-item-savable editable-option"
              onClick={this.clickSave}
            >
              Save
            </div>
        }
        {/* {props.content} */}
      </div>
    )
  }
}

export default CardItem;
