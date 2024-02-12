import React, { Component } from "react";
import ListItem from "./ListItem";
import ValidationMessage from "./ValidationMessage";
import "./List.css";

class List extends Component {
  //inicjalizacji stanu komponentu
  constructor(props) {
    super(props);

    //trzy klucze w obiekcie stanu
    this.state = {
      items: [],
      newItemText: "",
      inputError: "",
    };
  }

  //przyjmuje jedno argument - obiekt zdarzenia (e)
  //jest przekazywane automatycznie przez React podczas wystąpienia zdarzenia
  //na przykład zmiany wartości pola tekstowego
  inputChange = (e) => {
    //służącą do aktualizacji stanu komponentu. Stan w React powinien być zawsze aktualizowany przy użyciu tej metody, a nie bezpośrednio
    this.setState({
      newItemText: e.target.value,
      inputError: "",
    });
  };

  addItem = () => {
    //destrukturyzacja, pozwala na wygodne wyciąganie wartości z obiektu
    const { newItemText, items } = this.state;
    if (newItemText.length < 3) {
      this.setState({
        inputError: "Tekst musi mieć co najmniej 3 znaki.",
      });
      return;
    }

    this.setState({
      items: [...items, { id: Date.now(), text: newItemText }],
      newItemText: "",
      inputError: "",
    });
  };

  deleteItem = (itemId) => {
    this.setState({
      items: this.state.items.filter((item) => item.id !== itemId),
    });
  };

  //renderowanie struktury komponentu na podstawie jego stanu.
  render() {
    const { items, newItemText, inputError } = this.state;

    return (
      <div>
        <h2>Lista elementów</h2>
        <ul>
          {/* blok mapowania tablicy items, aby dla każdego elementu utworzyć komponent ListItem */}
          {items.map((item) => (
            <ListItem key={item.id} item={item} onDelete={this.deleteItem} />
          ))}
        </ul>
        <div className="add-item-form">
          <input
            type="text"
            value={newItemText}
            onChange={this.inputChange}
            placeholder="Dodaj nowy element"
            className={inputError ? "error" : ""}
          />
          <button onClick={this.addItem}>Dodaj</button>
          {inputError && <ValidationMessage message={inputError} />}
        </div>
      </div>
    );
  }
}

export default List;
