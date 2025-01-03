import { commentsList } from '../../components/Comments/Comments'
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
    // //get all comments
    // const arrayOfComments = await allCommentsGET()
    // if (arrayOfComments.error) {
    //   throw new Error(arrayOfComments.error)
    // }
    // console.log('this is the array of comments', arrayOfComments)
    // const sectionAll = commentsList(arrayOfComments, 'All Comments')
    // div.append(sectionAll)
    // Get my comments
    const arrayOfMyComments = await myCommentsGET()
    if (arrayOfMyComments.error) {
      throw new Error(arrayOfMyComments.error)
    }
    console.log('this is the array of my comments', arrayOfComments)
    const sectionMine = commentsList(arrayOfMyComments, 'My Comments')
    div.append(sectionMine)

    // Get comments by type
    const types = ['🌳', '🛠️', '💬']
    types.forEach(async (type) => {
      const arrayOfTypeComments = await typeCommentsGET(type)
      if (arrayOfTypeComments.error) {
        throw new Error(arrayOfTypeComments.error)
      }
      console.log(`This is the  arrayOf ${type} Comments`, arrayOfComments)
      const sectionType = commentsList(arrayOfTypeComments, `${type} Comments`)
      div.append(sectionType)
    })
  } catch (error) {
    console.error('Error:', error) // Log the error to the console
    alert(`Error message: ${error.message}`)
  } finally {
    document.getElementById('loader').remove()
  }
}
