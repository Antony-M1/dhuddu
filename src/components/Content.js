import React from "react";
import ItemList from "./ItemList";

const Content = ({ items, handleCheckboxChange, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheckboxChange={handleCheckboxChange}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ color: "red" }}>Your List is Empty</p>
      )}
    </main>
  );
};

export default Content;
