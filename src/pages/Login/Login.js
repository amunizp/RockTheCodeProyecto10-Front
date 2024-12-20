import { BasicButton } from '../../components/Buttons/BasicButton'
import { FormLogin } from '../../components/FormLogin/FormLogin'
import { FormRegister } from '../../components/FormRegister/FormRegister'
import { createPage } from '../../utils/functions/createPage'
import { loginPUT } from '../../utils/functions/LoginPUT'
import { registerPUT } from '../../utils/functions/RegisterPUT'
import './login.css'

let showRegister = false
export const Login = () => {
  console.log('Got to log in page')
  const div = createPage('login')

  const form = document.createElement('form')

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
          form.removeEventListener('submit', registerPUT)
          form.addEventListener('submit', loginPUT)
        } else {
          form.removeEventListener('submit', loginPUT)
          form.addEventListener('submit', registerPUT)
        }
        // form.addEventListener('submit', !showRegister ? loginPUT : registerPUT)
      },
      className: 'button-toggle'
    })
  )
  // localStorage.getItem('person') ? div.createElement('h2') :
  div.append(form)
  FormLogin(form)

  // FormLogin(form)

  // <form method="post">
}
