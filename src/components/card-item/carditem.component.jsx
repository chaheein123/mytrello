import React from 'react';
import ContentEditable from 'react-contenteditable';

import "./carditem.styles.scss";

class CardItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disableContent: true,
      // outsideClicked: this.props.outsideClicked

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
              edit
            </div> :
            <div
              className="card-item-savable editable-option"
              onClick={this.clickSave}
            >
              save
            </div>
        }
        {/* {props.content} */}
      </div>
    )
  }
}

export default CardItem;
