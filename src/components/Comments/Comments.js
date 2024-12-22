// Define una arrow function llamada `template` que devuelve un template string.
import './Comments.css'

export const commentsList = (arrayOfComments) => {
  const ul = document.createElement('ul')
  if (Array.isArray(arrayOfComments) || !arrayOfComments.length) {
    for (const comment of arrayOfComments) {
      if (comment.img.length == 0) {
        ul.innerHTML += `
        <li class="comment">
        
            <p>${comment.description}</p>
          
      </li>`
      } else {
        const listItem = document.createElement('li')
        listItem.classList.add('comment')
        const figure = document.createElement('figure')
        for (const img of comment.img) {
          figure.innerHTML += `<img src="${img}"/>`
        }
        const figureCaption = document.createElement('figcaption')
        figureCaption.innerHTML = `<p>${comment.description}</p>`
        figure.append(figureCaption)
        listItem.append(figure)
        ul.append(listItem)
      }
    }
  } else {
    ul.innerHTML = `<li class ="comment"><p>No comments here</p></li>`
  }
  return ul
}
