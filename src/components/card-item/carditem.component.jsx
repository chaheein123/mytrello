import React from 'react';
import ContentEditable from 'react-contenteditable';

import "./carditem.styles.scss";

class CardItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disableContent: true
    };
  };



  render() {
    return (
      <div>
        <ContentEditable
          className="card-item"
          disabled={this.state.disableContent}
          html={this.props.content}
          onChange={() => console.log("changeD!!!!")}
          onClick={(event) =>
            this.setState({ disableContent: false })
          }
        />

        {/* {props.content} */}
      </div>
    )
  }
}

export default CardItem;
