import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const {id} = useParams()
    console.log(useParams(), id)
  return (
    <div>Post {id}</div>
  )
}

export default Post