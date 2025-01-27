import { CreateComment } from '../../pages/CreateComment/CreateComment'
import { BasicBox } from '../BasicBox/BasicBox'
import './Comments.css'

export const commentsList = (arrayOfComments, title) => {
  const personAdmin = JSON.parse(localStorage.getItem('person')).admin
  console.log(`is the person admin?`, personAdmin)
  const section = document.createElement('section')
  section.classList.add('ParentCommentsCointainer')
  const detailAllComments = document.createElement('details')
  detailAllComments.classList.add('detailAllComments')
  section.append(detailAllComments)
  detailAllComments.innerHTML = `<summary>${title}</summary>`
  const ul = document.createElement('ul')
  ul.classList.add('commentsContainer')
  if (Array.isArray(arrayOfComments) || !arrayOfComments.length) {
    for (const comment of arrayOfComments) {
      const listItem = document.createElement('li')
      listItem.classList.add('comment')

      listItem.append(BasicBox(`<p>${comment._id}</p>`, 'divID'))
      listItem.append(BasicBox(`<p>${comment.description}</p>`, 'description'))
      const createDateTime = new Date(comment.createdAt)
      const updateDateTime = new Date(comment.updatedAt)
      const dateTimeContent = `  <p class="type-comment">Created ${createDateTime.toUTCString()}</p> <p class="type-comment">updated ${updateDateTime.toUTCString()}</p>`
      listItem.append(BasicBox(dateTimeContent, 'dateTime'))
      const statusContent = ` <div class="small-boxes"> <p class="type-comment">Type: ${
        comment.typeComment
      }</p> </div><div class="small-boxes"><p class="resolved">Complete: ${
        comment.resolved ? '✅' : '❎'
      } </div><div class="small-boxes"> <p class="who">Written by ${
        comment.person.personName
      }</p></div>`
      listItem.append(BasicBox(statusContent, 'status'))

      if (
        comment.relatedComments.length > 0 &&
        comment.relatedComments[0] !== ''
      ) {
        const divRelatedComments = document.createElement('div')
        divRelatedComments.classList.add('comment-box')
        divRelatedComments.innerHTML = `<p class="related"> Related to: ${comment.relatedComments}</p>`
        listItem.append(divRelatedComments)
      }
      if (comment.img.length == 0) {
        //do nothing
      } else {
        const figure = document.createElement('figure')
        for (const img of comment.img) {
          figure.innerHTML += `<img src="${img}"/>`
        }
        listItem.append(figure)
        ul.append(listItem)
      }

      const divActions = document.createElement('div')
      divActions.classList.add('actions')
      divActions.classList.add('comment-box')

      const divActionRelate = document.createElement('div')
      divActionRelate.classList.add('small-boxes', 'actionRelate')
      divActionRelate.innerHTML = '<p>🔗</p> <p>Create a related Comment</p>'
      divActionRelate.addEventListener('click', () => CreateComment(theID))
      divActions.appendChild(divActionRelate)

      if (personAdmin) {
        // admin option 1
        const divActionEdit = document.createElement('div')
        divActionEdit.classList.add('small-boxes', 'actionEdit', 'actionAdmin')
        divActionEdit.innerHTML = '<p>✍️</p><p>Edit this comment</p>'
        // admin option 2
        const divActionDelete = document.createElement('div')
        divActionDelete.classList.add('small-boxes', 'actionBin', 'actionAdmin')
        divActionDelete.innerHTML = '<p>🗑️</p><p>Bin this comment</p>'
        divActions.appendChild(divActionEdit)
        divActions.appendChild(divActionDelete)
      }
      listItem.appendChild(divActions)
      ul.append(listItem)
    }
  } else {
    ul.innerHTML = `<li class ="comment"><p>No comments here</p></li>`
  }
  detailAllComments.append(ul)
  return section
}
