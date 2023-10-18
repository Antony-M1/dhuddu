
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
      <Header title='Share Wave'/>
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer />
    </>
  );
}

export default ShareWave