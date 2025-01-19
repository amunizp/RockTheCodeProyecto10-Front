import { commentsList } from '../../components/Comments/Comments'
import ErrorDiv from '../../components/errorDiv/errorDiv'
import { Loading } from '../../components/Loading/Loading'
import { allCommentsGET } from '../../utils/functions/allCommentsGET'
import { createPage } from '../../utils/functions/createPage'
import { gardenCommentsGET } from '../../utils/functions/gardenCommentsGET'
import { myCommentsGET } from '../../utils/functions/myCommentsGET'
import { typeCommentsGET } from '../../utils/functions/typeCommentsGET'
import './Home.css'
export const Home = async () => {
  console.log('Got to my home site')
  const div = createPage('home')
  div.innerHTML = `<h2>Welcome Home</h2>`

  Loading(div)
  try {
    // Get all comments
    const arrayOfMyComments = await myCommentsGET()

    console.log('this is the array of my comments', arrayOfComments)
    const sectionMine = commentsList(arrayOfMyComments, 'My Comments')
    div.append(sectionMine)

    // Get comments by type
    const types = ['🌳', '🛠️', '💬']
    types.forEach(async (type) => {
      const arrayOfTypeComments = await typeCommentsGET(type)

      console.log(`This is the  arrayOf ${type} Comments`, arrayOfComments)
      const sectionType = commentsList(arrayOfTypeComments, `${type} Comments`)
      div.append(sectionType)
    })
  } catch (error) {
    const errorCaught = new Error(
      `Sorry I broke inside! Please tell the admin the following: ${error} `,
      { cause: error }
    )

    div.append(ErrorDiv(errorCaught.message))
    // console.error('Error:', error) // Log the error to the console
    // alert(`Error message: ${error.message}`)
  } finally {
    document.getElementById('loader').remove()
  }
}
