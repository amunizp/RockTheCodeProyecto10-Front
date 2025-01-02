import { BasicButton } from '../../components/Buttons/BasicButton'
import { FormLogin } from '../../components/FormLogin/FormLogin'
import { FormRegister } from '../../components/FormRegister/FormRegister'
import { createPage } from '../../utils/functions/createPage'
import { loginPOST } from '../../utils/functions/LoginPOST'
import { registerPOST } from '../../utils/functions/RegisterPOST'
import './login.css'

let showRegister = false
export const Login = () => {
  console.log('Got to log in page')
  const div = createPage('login')
  const form = document.createElement('form')
  form.addEventListener('submit', loginPOST)
  div.append(form)
  FormLogin(form)
  div.append(
    BasicButton({
      text: 'You do not have an account?',
      fnc: () => {
        showRegister = !showRegister
        showRegister ? FormRegister(form) : FormLogin(form)
        document.querySelector('.button-toggle').textContent = !showRegister
          ? 'Not Registered?'
          : 'Already Registered?'
        if (!showRegister) {
          form.removeEventListener('submit', registerPOST)
          form.addEventListener('submit', loginPOST)
        } else {
          form.removeEventListener('submit', loginPOST)
          form.addEventListener('submit', registerPOST)
        }
      },
      className: 'button-toggle'
    })
  )

  const figure = document.createElement('figure')
  figure.innerHTML = `<img src="/assets/static/Window.jpeg" alt="Picture of a normal Parkleys window.">`
  div.append(figure)
}
