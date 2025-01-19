import './errorDiv.css'

const ErrorDiv = (Message) => {
  const sectionError = document.createElement('section')
  sectionError.classList.add('errorDiv')
  sectionError.innerHTML = `<p>${Message}</p>`
  return sectionError
}

export default ErrorDiv
