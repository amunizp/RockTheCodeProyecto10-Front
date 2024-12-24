import { BasicButton } from '../Buttons/BasicButton'
import { FormField } from '../FormField/FormField'
import './FormNewComment.css'
export const FormNewComment = (form) => {
  var labelText = 'New Comment'
  form.className = 'login-form'
  form.innerHTML = ''
  form.method = 'post'
  form.innerHTML = `${FormField({ labelText })} ${FormField({
    labelText: 'Description'
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
