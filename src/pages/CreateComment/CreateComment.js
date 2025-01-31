import { FormNewComment } from '../../components/FormNewComment/FormNewComment'
import { createPage } from '../../utils/functions/createPage'
import { newCommentPOST } from '../../utils/functions/newCommentPOST'
import './createComment.css'
export const CreateComment = (relation) => {
  console.log('Create a new comment form.')
  const div = createPage('CreateComment')
  div.innerHTML = `<h2>NewComment</h2>`
  const form = document.createElement('form')
  // const newCommentPUT = console.log('Call newCommentPUT')
  form.setAttribute('enctype', 'multipart/form-data')
  // form.addEventListener('submit', newCommentPOST)
  div.append(form)

  FormNewComment(form, relation)
}
