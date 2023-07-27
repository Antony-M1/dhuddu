import React from 'react'
import Button from "@mui/material/Button";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import './css/ItemList.css'

const LineItem = ({ item, handleCheckboxChange, handleDelete }) => {
  return (
    <>
      <li className="item" key={item.id}>
        <div className='div-item'>
          <div>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
          </div>
          <div>
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheckboxChange(item.id)}
            >
              {item.item}
            </label>
          </div>
          <div>
            <Button
              id="list-button"
              onClick={() => handleDelete(item.id)}
              color="error"
              startIcon=<DeleteTwoToneIcon />
              aria-label="delete"
            />
          </div>
        </div>
      </li>
    </>
  );
};

export default LineItem