import ErrorDiv from '../../components/errorDiv/errorDiv'
import { Loading } from '../../components/Loading/Loading'
import { Home } from '../../pages/Home/Home'
import { API } from '../API/API'

export const loginPOST = async (e, div) => {
  e.preventDefault()
  const parent = document.getElementById('login')
  Loading(parent)
  const [nameInput, passwordInput] = e.target
  console.log('Logging in', nameInput.personName)
  const body = {
    personName: nameInput.value,
    password: passwordInput.value
  }

  try {
    const data = await API({
      endpoint: 'people/login',
      method: 'POST',
      body
    })
    if (data.error) {
      throw new Error(data.error)
    }
    if (data.token) {
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
  } catch (error) {
    console.error('Error logging in:', error)
    parent.prepend(ErrorDiv(error))

    // alert(`Error message: `, error)
  } finally {
    document.getElementById('loader').remove()
  }
  // localStorage.removeItem('token')
}
