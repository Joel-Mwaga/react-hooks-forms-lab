import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

// In your App.js
function App() {
  // ... your existing state and functions ...

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      
      {/* Add the ItemForm component here */}
      <ItemForm onItemFormSubmit={handleAddItem} />
      
      <ShoppingList items={items} onItemDelete={handleDeleteItem} />
    </div>
  );
}

export default App;

