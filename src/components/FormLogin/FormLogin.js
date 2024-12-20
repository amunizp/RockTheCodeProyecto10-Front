import { loginPUT } from '../../utils/functions/LoginPUT'
import { BasicButton } from '../Buttons/BasicButton'
import { FormField } from '../FormField/FormField'
import './FormLogin.css'
export const FormLogin = (form) => {
  var labelText = 'Login'
  form.className = 'login-form'
  form.innerHTML = ''
  form.method = 'post'
  form.innerHTML = `${FormField({ labelText })} ${FormField({
    labelText: 'Password',
    type: 'password'
  })}`
  form.append(
    BasicButton({
      text: labelText,
      fnc: () => {
        console.log('Submitted login')
        form.addEventListener('submit', loginPUT)
      }
    })
  )
}
