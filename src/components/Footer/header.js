import './footer.css'
export const Footer = () => {
  // const header = document.getElementsByName('header')
  const footer = document.createElement('footer')
  footer.innerHTML = `<p>Made by C4AD</p>`

  document.body.append(footer)
}
