import './footer.css'
export const Footer = () => {
  // const header = document.getElementsByName('header')
  const footer = document.createElement('footer')
  footer.innerHTML = `<p>Made by C4AD. <a href="https://github.com/amunizp/RockTheCodeProyecto10-Front">Front</a> and <a href="https://github.com/amunizp/RockTheCodeProyecto10-Back">Back</a> </p>`

  document.body.append(footer)
}
