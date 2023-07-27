import React from 'react'

const Footer = ({length}) => {
    const year = new Date();

  return (
    // <footer>Copyright &copy; {year.getFullYear()}</footer>
    <footer>{length} List of {length > 1 ? "Items":"Item"}</footer>
  )
}

export default Footer