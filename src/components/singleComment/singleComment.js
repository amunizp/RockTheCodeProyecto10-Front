import { BasicBox } from '../BasicBox/BasicBox'
import './singleComment.css'

export const singleComment = (comment) => {
  const singleCommentSection = document.createElement('section')
  singleCommentSection.classList.add('singleComment', 'comment-box')
  singleCommentSection.append(
    BasicBox(`<p>UniqueID: ${comment._id}</p>`, 'divID')
  )
  singleCommentSection.append(
    BasicBox(`<p>${comment.description}</p>`, 'description')
  )
  const createDateTime = new Date(comment.createdAt)
  const updateDateTime = new Date(comment.updatedAt)
  const dateTimeContent = `  <p class="type-comment">Created ${createDateTime.toUTCString()}</p> <p class="type-comment">updated ${updateDateTime.toUTCString()}</p>`
  singleCommentSection.append(BasicBox(dateTimeContent, 'dateTime'))
  const statusContent = ` <div class="small-boxes"> <p class="type-comment">Type: ${
    comment.typeComment
  }</p> </div><div class="small-boxes"><p class="resolved">Complete: ${
    comment.resolved ? '✅' : '❎'
  } </div><div class="small-boxes"> <p class="who">Written by ${
    comment.person
  }</p></div>`
  singleCommentSection.append(BasicBox(statusContent, 'status'))
  console.log(
    'the related comments are',
    comment.relatedComments,
    'fromthe following id',
    comment._id
  )
  if (comment.relatedComments.length > 0 && comment.relatedComments[0] !== '') {
    const divRelatedComments = document.createElement('div')
    divRelatedComments.classList.add('comment-box')
    divRelatedComments.innerHTML = `<p class="related"> Related to: ${comment.relatedComments}</p>`
    singleCommentSection.append(divRelatedComments)
  }
  if (comment.img.length == 0) {
    //do nothing
  } else {
    const figure = document.createElement('figure')
    for (const img of comment.img) {
      figure.innerHTML += `<img src="${img}"/>`
    }
    singleCommentSection.append(figure)
    // ul.append(singleCommentSection)
  }
  return singleCommentSection
}
