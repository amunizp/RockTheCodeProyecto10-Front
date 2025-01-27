import './BasicBox.css'

export const BasicBox = (content, extraClass) => {
  const divBasic = document.createElement('div')
  divBasic.classList.add(extraClass)
  divBasic.classList.add('comment-box')
  divBasic.innerHTML = content
  return divBasic
}
