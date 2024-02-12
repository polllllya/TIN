import React, { Component } from "react";
import "./ListItem.css";

class ListItem extends Component {
  deleteClick = () => {
    //Destrukturyzuje obiekt props (właściwości przekazywane do komponentu). Uzyskuje dostęp do dwóch właściwości
    const { item, onDelete } = this.props;
    onDelete(item.id);
  };

  render() {
    const { item } = this.props;

    return (
      <li className="list-item">
        <span className="item-text">{item.text}</span>
        <button className="delete-button" onClick={this.deleteClick}>
          Usuń
        </button>
      </li>
    );
  }
}

export default ListItem;
