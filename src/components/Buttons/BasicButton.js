import './BasicButton.css'
export const BasicButton = ({ text, fnc, className = 'main-button' }) => {
  const button = document.createElement('button')
  button.textContent = text
  button.classList.add(className)
  button.addEventListener('click', fnc)
  return button
}
