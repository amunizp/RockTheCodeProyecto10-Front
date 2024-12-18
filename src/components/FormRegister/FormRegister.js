import { BasicButton } from '../Buttons/BasicButton'
import { FormField } from '../FormField/FormField'
import './FormRegister.css'
export const FormRegister = (form) => {
  var labelText = 'Register'
  form.className = 'register-form'
  form.innerHTML = ''
  form.innerHTML = `${FormField({ labelText })} ${FormField({
    labelText: 'Password',
    type: 'password'
  })}`
  form.append(
    BasicButton({
      text: labelText,
      fnc: () => {
        console.log('Submitted Register')
      }
    })
  )
}
