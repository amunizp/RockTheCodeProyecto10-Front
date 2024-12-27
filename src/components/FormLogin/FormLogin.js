import { BasicButton } from '../Buttons/BasicButton'
import { FormField } from '../FormField/FormField'
import './FormLogin.css'
export const FormLogin = (form) => {
  var labelText = 'Login'
  form.className = 'login-form'
  form.innerHTML = ''
  form.method = 'post'
  form.innerHTML = `${FormField({
    labelText,
    titleText: labelText
  })} ${FormField({
    labelText: 'Password',
    titleText: 'Password',
    type: 'password'
  })}`
  form.append(
    BasicButton({
      text: labelText,
      fnc: () => {
        console.log('Submitted login')
      }
    })
  )
}
