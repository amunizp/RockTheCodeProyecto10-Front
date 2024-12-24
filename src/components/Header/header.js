import { routes } from '../../utils/routes/routes'
import { navigate } from '../../utils/functions/navigate'
import './header.css'
export const Header = () => {
  // const header = document.getElementsByName('header')
  const header = document.createElement('header')
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')
  const h1 = document.createElement('h1')
  h1.textContent = 'PARKLEYS'

  for (const route of routes) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.addEventListener('click', (e) => navigate(e, route))
    a.textContent = route.text
    a.href = route.path
    li.append(a)
    ul.append(li)
  }
  header.append(h1)
  header.append(nav)
  nav.append(ul)
  document.body.append(header)
}
