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
  // const parentSection = document.createElement('section')

  const section = commentsList(arrayOfComments)
  div.append(section)
  document.getElementById('loader').remove()
  // const comments = await API({ endpoint: 'comments' })
  //console.log('the array of comments', arrayOfComments)
}

// "img": [],
// "_id": "670e4483aeb8ff5858476007",
// "description": "I created the first issue",
// "updates": [],
// "resolved": true,
// "createdAt": "2024-10-15T10:31:31.951Z",
// "updatedAt": "2024-12-10T13:49:24.041Z",
// "__v": 0,
// "relatedComments": []
// },
