import React from 'react'

const Header = (props) => {
  return (
    <>
      <header>{props.title}</header>
    </>
  )
}

Header.defaultProps = {
  title: "ToDo List"
}

export default Header