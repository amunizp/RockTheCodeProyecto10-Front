import { commentsList } from '../../components/Comments/Comments'
import { Loading } from '../../components/Loading/Loading'
import { allCommentsGET } from '../../utils/functions/allCommentsGET'
import { createPage } from '../../utils/functions/createPage'
import './Home.css'
export const Home = async () => {
  console.log('Got to my home site')
  const div = createPage('home')
  div.innerHTML = `<h2>Welcome Home</h2>`

  Loading(div)
  try {
    const arrayOfComments = await allCommentsGET()
    if (arrayOfComments.error) {
      throw new Error(arrayOfComments.error)
    }
    console.log('this is the array of comments', arrayOfComments)

    const section = commentsList(arrayOfComments)
    div.append(section)
  } catch (error) {
    console.error('Error:', error) // Log the error to the console
    alert(`Error message: ${error.message}`)
  } finally {
    document.getElementById('loader').remove()
  }
}
