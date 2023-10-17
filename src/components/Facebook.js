import React from 'react'
import './css/Facebook.css'
import { useState } from 'react'


function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function Facebook() {

  const [textType, setTextType] = useState('users')
  const [items,setItems] = useState([])

  const initializeValue = async () => {
    let APIurl = "https://jsonplaceholder.typicode.com/users"; 

    let response = await fetch(APIurl);
    const listItems = await response.json();
    setItems(listItems);

  }

  const handleOnClick = async (value) => {
    setTextType(value)

    let APIurl = ''
    if (value === 'users'){
      APIurl = "https://jsonplaceholder.typicode.com/users"; 
    }else if (value === 'post'){
      APIurl = "https://jsonplaceholder.typicode.com/posts";
    }else if (value === 'comments'){
      APIurl = "https://jsonplaceholder.typicode.com/comments";
    }

    let response = await fetch(APIurl);
    const listItems = await response.json();
    setItems(listItems);
  };


  return (
    <>
      <div className="main-nav">
        <div className="nav-button">
          <button onClick={() => handleOnClick("users")}>User</button>
        </div>
        <div className="nav-button">
          <button onClick={() => handleOnClick("post")}>Post</button>
        </div>
        <div className="nav-button">
          <button onClick={() => handleOnClick("comments")}>Comments</button>
        </div>
      </div>
      <div className="content">
        {/* {JSON.stringify(items)} */}
        <ul>
          {items.map((item) => (
            <li className='item-list' key={item.id}>{JSON.stringify(item)}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Facebook