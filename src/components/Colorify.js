import React from 'react'
// import '../components/css/colorify.css'
import { useState } from 'react'


function Colorify() {

    const [color, setColor] = useState()
    const [textColor, setTextColor] = useState('black')

    const handleChange = (e) => {

        setColor(e.target.value)
        
    }

    const handleClick = () => {
        if (textColor === 'black'){
            setTextColor('white')
        }else{
            setTextColor('black')
        }
    }

  return (
    <div className="container">
      <div className="box">
        <div style={{ background: color, color:textColor }} className="color-box" >{color}</div>
        <input
          className="color-box-down"
          placeholder="Enter Color"
          //   onChange={(e) => console.log(e)}
          onChange={handleChange}
        />
        <button type='button' onClick={handleClick} className="color-box-down">Toggle Color</button>
      </div>
    </div>
  );
}

export default Colorify