import { Login } from '../../pages/Login/Login'
import { API } from '../API/API'

export const registerPOST = async (e) => {
  e.preventDefault()
  console.log('Registering', e)

  const [nameInput, passwordInput] = e.target

  const formData = new FormData()
  formData.append('personName', nameInput.value)
  formData.append('password', passwordInput.value)

  const body = {
    personName: nameInput.value,
    password: passwordInput.value
  }
  const data = await API({
    endpoint: 'people/register',
    method: 'POST',
    body //: formData
  })
  // console.log('this is the data', data)
  alert(`I have created your account, ${data.personName}! You can log in now.`)
  Login()
  // try {

  // } catch (error) {
  //   alert(error)
  // }
}
