import React, { useState } from "react";
//Importuje bibliotekę axios do wykonywania żądań HTTP.
import axios from "axios";

const AddItemForm = () => {
  // Używa hooka useState do utworzenia stanu title z domyślną wartością pustego ciągu znaków.
  //useState to hook w React, który umożliwia komponentom funkcjonalnym przechowywanie i aktualizowanie stanu
  const [title, setTitle] = useState("");

  // Po wprowadzeniu tekstu i kliknięciu przycisku "Add Item", wysyłane jest żądanie POST do JSONPlaceholder API, dodając nowy element.
  const handleAddItem = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { title })
      .then((response) => console.log("Item added:", response.data))
      .catch((error) => console.error("Error adding item:", error));
  };

  return (
    <div>
      <h2>Add Item</h2>
      <input
        type="text"
        value={title}
        // Pole tekstowe, które przechowuje wartość title i aktualizuje ją w miarę wprowadzania tekstu.
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItemForm;
