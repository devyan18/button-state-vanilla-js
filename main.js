import Button from './components/button.js'

const element = document.getElementById('App')

const handlePressBtn = (e) => {
  console.log(e)
}

Button(element, 'Click Me', handlePressBtn)
Button(element, 'Click Me', handlePressBtn)
