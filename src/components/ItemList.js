import React from 'react'
import LineItem from './LineItem';

const ItemList = ({ items, handleCheckboxChange, handleDelete }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <LineItem 
            item={item}
            key={item.id}
            handleCheckboxChange={handleCheckboxChange}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default ItemList