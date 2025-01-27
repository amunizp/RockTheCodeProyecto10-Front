import { CreateComment } from '../../pages/CreateComment/CreateComment'
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
      var theID = comment._id
      console.log(theID)
      const listItem = document.createElement('li')
      listItem.classList.add('comment')
      const divID = document.createElement('div')
      divID.classList.add('divID')
      divID.classList.add('comment-box')
      divID.innerHTML = `<p><a>${comment._id}</a></p>`
      const divDescription = document.createElement('div')
      divDescription.classList.add('comment-box')
      divDescription.innerHTML = `  <p>${comment.description}</p>`
      const divDateTime = document.createElement('div')
      divDateTime.classList.add('comment-box')
      const createDateTime = new Date(comment.createdAt)
      const updateDateTime = new Date(comment.updatedAt)
      divDateTime.innerHTML = `  <p class="type-comment">Created ${createDateTime.toUTCString()}</p> <p class="type-comment">updated ${updateDateTime.toUTCString()}</p>`
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
      listItem.append(divID)
      listItem.append(divDescription)
      listItem.append(divDateTime)
      listItem.append(divPerson)
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
      // admin option 1
      const divActionEdit = document.createElement('div')
      divActionEdit.classList.add('small-boxes', 'actionEdit', 'actionAdmin')
      divActionEdit.innerHTML = '<p>✍️</p><p>Edit this comment</p>'
      // admin option 2
      const divActionDelete = document.createElement('div')
      divActionDelete.classList.add('small-boxes', 'actionBin', 'actionAdmin')
      divActionDelete.innerHTML = '<p>🗑️</p><p>Bin this comment</p>'

      if (personAdmin) {
        divActions.appendChild(divActionEdit)
        divActions.appendChild(divActionDelete)
      } // divActions.innerHTML = `<div class='small-boxes actionRelate'>🔗 Create a related Comment</div> ${
      //   personAdmin
      //     ? '<div class="small-boxes actionEdit">✍️ Edit this comment</div>'
      //     : ''
      // } ${
      //   personAdmin
      //     ? '<div class="small-boxes actionDelete">🗑️ Bin this comment</div>'
      //     : ''
      // } `
      // // const actionRelate = document.getElementsByClassName('actionRelate')

      // // actionRelate[0].addEventListener('click', CreateComment)
      // const listOfRelateActions =
      //   document.getElementsByClassName('actionRelate')

      // for (let index = 0; index < listOfRelateActions.length; index++) {
      //   listOfRelateActions[index].addEventListener('click', () =>
      //     CreateComment(theID)
      //   )
      // }
      listItem.appendChild(divActions)
    }
  } else {
    ul.innerHTML = `<li class ="comment"><p>No comments here</p></li>`
  }
  detailAllComments.append(ul)
  return section
}
