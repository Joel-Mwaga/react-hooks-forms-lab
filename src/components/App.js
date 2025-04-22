import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import ItemForm from './ItemForm';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Add this state
  const [items, setItems] = useState([]); // Make sure you have items state

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Add these functions if they don't exist
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ItemForm onItemFormSubmit={handleAddItem} />
      <ShoppingList items={items} onItemDelete={handleDeleteItem} />
    </div>
  );
}

export default App;