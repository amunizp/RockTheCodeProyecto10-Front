import './Comments.css'

export const commentsList = (arrayOfComments, title) => {
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
      listItem.append(divDescription)
      listItem.append(divDateTime)
      listItem.append(divPerson)
      if (comment.relatedComments.length !== 0) {
        const divRelatedComments = document.createElement('div')
        divRelatedComments.classList.add('comment-box')
        divRelatedComments.innerHTML = `<p class="type-comment"> Related to: ${comment.relatedComments}</p>`
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
    }
  } else {
    ul.innerHTML = `<li class ="comment"><p>No comments here</p></li>`
  }
  detailAllComments.append(ul)
  return section
}
