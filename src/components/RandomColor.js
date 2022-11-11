import { useState } from 'react'
import generateRandomColor from '../utils/generateRandomColor'
import '../css/RandomColor.css'

function RandomColor() {
  const [randomColor, setRandomColor] = useState(generateRandomColor())

  function setNewColor() {
    setRandomColor(generateRandomColor())
  }

  return (
    <div className="container">
      <div className="colorBox" style={{ backgroundColor: randomColor }}></div>
      <div>
        <button onClick={setNewColor}>Generate new random color</button>
      </div>
    </div>
  )
}

export default RandomColor
