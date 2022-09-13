import { v4 as uuid } from 'uuid'
import { setupCounter } from '../counter'

export default function (
  element,
  title,
  onPress = () => {}
) {
  const btnID = uuid()

  if (!element) {
    throw new Error('Element is required')
  }

  if (!title) {
    throw new Error('Title is required')
  }

  element.innerHTML += `
    <button id="${btnID}" class="btn">
      ${title}
    </button>`

  const btn = document.getElementById(btnID)

  setupCounter(btn)
}
