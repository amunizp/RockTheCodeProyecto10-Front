import { allCommentsGET } from '../../utils/functions/allCommentsGET'
import { createPage } from '../../utils/functions/createPage'
import './Home.css'
export const Home = async () => {
  console.log('Got to my home site')
  const div = createPage('home')
  div.innerHTML = `<h2>Welcome Home</h2>`
  const section = document.createElement('section')
  allCommentsGET()
  // const comments = await API({ endpoint: 'comments' })
  // for (const comment of comments) {
  //   section.innerHTML += `
  //   <article>
  //       <figure> <img src="${comment.img}"/></figure>
  //   <p>${comment.description}</p>
  // </article>
  // `
  // }
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
