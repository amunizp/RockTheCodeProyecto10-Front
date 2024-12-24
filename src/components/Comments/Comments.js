// Define una arrow function llamada `template` que devuelve un template string.
import './Comments.css'

// {
//   img: [{ type: String, trim: true, required: false }],
//   description: { type: String, required: true },
//   resolved: { type: Boolean, required: true, default: false },
//   person: { type: mongoose.Types.ObjectId, required: true, ref: 'people' },
//   relatedComments: [
//     // { type: mongoose.Types.ObjectId, required: false, ref: 'comments' }
//     this
//   ],
//   typeComment: {
//     type: String,
//     required: false,
//     enum: ['repair', 'info request']
//   }
// }
export const commentsList = (arrayOfComments) => {
  const section = document.createElement('section')
  section.classList.add('ParentCommentsCointainer')
  section.innerHTML = `<h3>All Comments</h3>`
  const ul = document.createElement('ul')
  ul.classList.add('commentsContainer')
  if (Array.isArray(arrayOfComments) || !arrayOfComments.length) {
    for (const comment of arrayOfComments) {
      const listItem = document.createElement('li')
      listItem.classList.add('comment')
      const divDescription = document.createElement('div')
      divDescription.classList.add('comment-box')
      divDescription.innerHTML = `  <p>${comment.description}</p>`
      const divPerson = document.createElement('div')
      divPerson.classList.add('comment-box')
      divPerson.innerHTML = ` <div class="small-boxes"> <p class="type-comment">Type: ${
        comment.typeComment
      }</p> </div><div class="small-boxes"><p class="resolved">Complete: ${
        comment.resolved ? '✅' : '❎'
      } </div><div class="small-boxes"> <p class="who">Written by ${
        comment.person.personName
      }</p></div>`
      ul.append(listItem)
      listItem.append(divDescription)
      listItem.append(divPerson)
      if (comment.img.length == 0) {
      } else {
        const figure = document.createElement('figure')
        for (const img of comment.img) {
          figure.innerHTML += `<img src="${img}"/>`
        }
        listItem.append(figure)
        ul.append(listItem)
      }
    }
  } else {
    ul.innerHTML = `<li class ="comment"><p>No comments here</p></li>`
  }
  section.append(ul)
  return section
}
