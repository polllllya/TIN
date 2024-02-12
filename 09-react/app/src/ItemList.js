import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemList = () => {
  //Pobrane elementy są przechowywane w stanie items.
  const [items, setItems] = useState([]);

  //useEffect do pobrania listy elementów z JSONPlaceholder API po zamontowaniu komponentu
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  //Elementy pobrane z API są renderowane w liście (<ul>), gdzie każdy element jest reprezentowany jako <li>
  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
