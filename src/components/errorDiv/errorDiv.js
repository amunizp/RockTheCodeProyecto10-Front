import './errorDiv.css'

const ErrorDiv = (Message) => {
  const sectionError = document.createElement('section')
  sectionError.classList.add('errorDiv')
  sectionError.innerHTML = `<h3>Something broke inside!</h3><p>Please tell the admin of the app the following message:</p><p>${Message}</p>`
  return sectionError
}

export default ErrorDiv
