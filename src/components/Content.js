import React from 'react'
import { useState } from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

const Content = () => {

  const [items, setItems] = useState(
    [
      {
        id:1,
        checked: true,
        item: "Preactice coding"
      },
      {
        id:2,
        checked: true,
        item: "Play Cricked"
      },
      {
        id:3,
        checked: false,
        item: "Read about AI"
      },
      {
        id:4,
        checked: true,
        item: "Django Practice"
      }
    ]
  );

  const handleCheckboxChange = (id) => {
    console.log(id)
    const listItems = items.map((item) => item.id===id ? {...item, checked: !item.checked} : item) 
    setItems(listItems);
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
  }
  
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => (handleCheckboxChange(item.id))}
            />
            <label>{item.item}</label>
            <Button onClick={() => handleDelete(item.id)} color="error" startIcon=<DeleteTwoToneIcon /> />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Content