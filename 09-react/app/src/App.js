import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemList from "./ItemList";
import AddItemForm from "./AddItemForm";
import NotFound from "./NotFound";

const App = () => {
  return (
    //Route definiuje, które komponenty mają zostać wyrenderowane dla określonych ścieżek URL
    <Router>
      //Route definiuje, które komponenty mają zostać wyrenderowane dla
      określonych ścieżek URL
      <Routes>
        //Określa, że dla ścieżki głównej ("/"), ma zostać użyty komponent
        ItemList.
        <Route path="/" element={<ItemList />} />
        <Route path="/add" element={<AddItemForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
