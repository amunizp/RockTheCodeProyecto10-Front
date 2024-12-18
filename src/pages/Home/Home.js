import { createPage } from '../../utils/functions/createPage'
import './Home.css'
const Mine = () => {
  console.log('Got to my home site')
  const div = createPage('home')
  div.innerHTML = `<h2>Welcome Home</h2>`
}

export default Mine
