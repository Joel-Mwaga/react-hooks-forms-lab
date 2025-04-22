import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");

  const itemsToDisplay = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ShoppingList">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
