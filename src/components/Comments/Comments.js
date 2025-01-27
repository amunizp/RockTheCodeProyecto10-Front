import { CreateComment } from '../../pages/CreateComment/CreateComment'
import { OneComment } from '../../pages/EditOneComment/EditOneComment'
import { deleteCommentDEL } from '../../utils/functions/deleteCommentDEL'
import { BasicBox } from '../BasicBox/BasicBox'
import { singleComment } from '../singleComment/singleComment'
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
      listItem.append(singleComment(comment))

      const divActions = document.createElement('div')
      divActions.classList.add('actions')
      divActions.classList.add('comment-box')

      const divActionRelate = document.createElement('div')
      divActionRelate.classList.add('small-boxes', 'actionRelate')
      divActionRelate.innerHTML = '<p>🔗</p> <p>Create a related Comment</p>'
      divActionRelate.addEventListener('click', () =>
        CreateComment(comment._id)
      )
      divActions.appendChild(divActionRelate)

      if (personAdmin) {
        // admin option 1
        const divActionEdit = document.createElement('div')
        divActionEdit.classList.add('small-boxes', 'actionEdit', 'actionAdmin')
        divActionEdit.innerHTML = '<p>✍️</p><p>Edit this comment</p>'
        divActionEdit.addEventListener('click', () => {
          OneComment(comment._id)
        })
        // admin option 2
        const divActionDelete = document.createElement('div')
        divActionDelete.classList.add('small-boxes', 'actionBin', 'actionAdmin')
        divActionDelete.addEventListener('click', () => {
          deleteCommentDEL(comment._id)
        })

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
