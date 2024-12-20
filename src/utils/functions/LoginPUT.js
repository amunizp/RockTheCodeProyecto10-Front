import { Home } from '../../pages/Home/Home'
import { API } from '../API/API'

export const loginPUT = async (e) => {
  e.preventDefault()
  console.log('Logging in', e)

  const [nameInput, passwordInput] = e.target

  const body = {
    personName: nameInput.value,
    password: passwordInput.value
  }

  const data = await API({
    endpoint: 'people/login',
    method: 'POST',
    body
  })
  localStorage.setItem('token', JSON.stringify(data.token))
  localStorage.setItem('person', JSON.stringify(data.person)) //this is not storing
  const personNameStorage = JSON.parse(
    localStorage.getItem('person')
  ).personName
  alert(
    `You are logged in, ${personNameStorage}! will take you to your home.
    In your local storage I saved a token, name and your hashed password. `
  )
  Home()
}
