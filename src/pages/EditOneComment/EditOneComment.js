import { singleComment } from '../../components/singleComment/singleComment'
import { createPage } from '../../utils/functions/createPage'
import { oneCommentGET } from '../../utils/functions/oneCommentGET'
import './EditOneComment.css'
export const OneComment = async (id) => {
  console.log('Got to see one comment', id)

  window.history.pushState('', '', `/comments/${id}`)
  // route.page()
  const parentElement = createPage('OneComment')
  parentElement.innerHTML = `<h2>Comment</h2>`
  const originalSection = document.createElement('section')
  originalSection.innerHTML = `<h3>Original comment</h3>`
  const comment = await oneCommentGET(id) //need to create it on the back?

  originalSection.append(singleComment(comment))
  // const editSection = document.createElement('section')
  // editSection.innerHTML = `<h3>Edit comment</h3>`
  parentElement.append(originalSection)
  // parentElement.append(editSection)
}
