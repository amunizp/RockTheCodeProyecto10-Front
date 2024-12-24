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
  const arrayOfComments = await allCommentsGET()

  const section = commentsList(arrayOfComments)
  div.append(section)
  document.getElementById('loader').remove()
}
