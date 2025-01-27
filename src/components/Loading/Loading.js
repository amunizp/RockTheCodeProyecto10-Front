import './Loading.css'

export const Loading = (parent) => {
  const loader = document.createElement('span')
  loader.classList.add('loader')
  loader.id = 'loader'
  loader.innerText = 'Loading'
  parent.prepend(loader)
}
