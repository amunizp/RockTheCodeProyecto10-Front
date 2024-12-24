import { FormNewComment } from '../../components/FormNewComment/FormNewComment'
import { createPage } from '../../utils/functions/createPage'
import './createComment.css'
export const CreateComment = () => {
  console.log('Create a new comment')
  const div = createPage('CreateComment')
  div.innerHTML = `<h2>NewComment</h2>`
  const form = document.createElement('form')
  const newCommentPUT = console.log('Call newCommentPUT')

  form.addEventListener('submit', newCommentPUT)
  div.append(form)
  FormNewComment(form)
}
