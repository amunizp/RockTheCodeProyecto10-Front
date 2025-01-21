import './errorDiv.css'

const ErrorDiv = (Message) => {
  const sectionError = document.createElement('section')
  sectionError.classList.add('errorDiv')
  sectionError.innerHTML = `<h3>Something did not work!</h3><p>This is what I know:</p><p>${Message}</p>`
  return sectionError
}

export default ErrorDiv
