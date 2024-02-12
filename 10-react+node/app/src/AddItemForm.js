import React, { useState } from "react";
import axios from "axios";

const AddItemForm = () => {
  const [title, setTitle] = useState("");

  const handleAddItem = () => {
    axios
      .post("http://localhost:3001/items", { title })
      .then((response) => console.log("Item added:", response.data))
      .catch((error) => console.error("Error adding item:", error));
  };

  return (
    <div>
      <h2>Add Item</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItemForm;
