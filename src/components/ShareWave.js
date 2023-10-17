
import React from 'react'
import Header from './sharewave/Header'
import Nav from './sharewave/Nav'
import Home from './sharewave/Home'
import NewPost from './sharewave/NewPost'
import PostPage from './sharewave/PostPage'
import About from './sharewave/About'
import Missing from './sharewave/Missing'
import Footer from './sharewave/Footer'
import Post from './sharewave/Post'

import { Link, Routes, Route } from 'react-router-dom'

const ShareWave = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/sharewave/home">Home</Link>
          </li>
          <li>
            <Link to="/sharewave/about">About</Link>
          </li>
          <li>
            <Link to="/sharewave/newpost">New Post</Link>
          </li>
          <li>
            <Link to="/sharewave/postpage">Post Page</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/postpage" element={<PostPage />} />
        <Route path="/postpage/:id" element={<Post />} />
      </Routes>
      {/* <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer /> */}
    </>
  );
}

export default ShareWave