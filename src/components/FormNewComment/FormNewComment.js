import { BasicButton } from '../Buttons/BasicButton'
import { FormField } from '../FormField/FormField'
import './FormNewComment.css'
export const FormNewComment = (form) => {
  var labelText = 'New Comment'
  form.className = 'newComment-form'
  form.innerHTML = ''
  form.method = 'put'
  form.innerHTML = `${FormField({
    labelText: 'description'
  })}`
  form.append(
    BasicButton({
      text: labelText,
      fnc: () => {
        console.log('Submitted New Comment')
      }
    })
  )
}

// const commentSchema = new mongoose.Schema(
//   {
//     img: [{ type: String, trim: true, required: false }],
//     description: { type: String, required: true },
//     resolved: { type: Boolean, required: true, default: false },
//     person: { type: mongoose.Types.ObjectId, required: true, ref: 'people' },
//     relatedComments: [
//       // { type: mongoose.Types.ObjectId, required: false, ref: 'comments' }
//       this
//     ],
//     typeComment: {
//       type: String,
//       required: false,
//       enum: ['🛠️', '💬', '🌳']
//     }
//   },
//   {
//     timestamps: true,
//     collection: 'comments'
//   }
// )
