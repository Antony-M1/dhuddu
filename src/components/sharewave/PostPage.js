import React from 'react'
import { Link } from 'react-router-dom'

const PostPage = () => {
  return (
    <div>
      <h1>Post Page</h1>
      <ul>
        <li>
          <Link to="1">Post 1</Link>
        </li>
        <li>
          <Link to="2">Post 2</Link>
        </li>
        <li>
          <Link to="3">Post 3</Link>
        </li>
        <li>
          <Link to="4">Post 4</Link>
        </li>
      </ul>
    </div>
  );
}

export default PostPage