import generateRandomNumber from './generateRandomNumber'

function generateRandomColor() {
  const randomColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`
  return randomColor
}

export default generateRandomColor
