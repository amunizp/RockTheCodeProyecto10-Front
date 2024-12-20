// Define una arrow function llamada `template` que devuelve un template string.
import './Comments.css'

export const commentsList = (arrayOfComments) => {
  const ul = document.createElement('ul')
  if (Array.isArray(arrayOfComments) || !arrayOfComments.length) {
    for (const comment of arrayOfComments) {
      ul.innerHTML += `
    <li class="comment">
        <figure> 
        <img src="${comment.img}"/>
        <figcaption>
        ${comment.description}
        </figcaption>
        </figure>
  </li>
  `
    }
  } else {
    ul.innerHTML = `<li><p>No comments here</p></li>`
  }
  return ul
}
