import { BasicButton } from '../Buttons/BasicButton'
import { FormField } from '../FormField/FormField'
import './FormNewComment.css'
export const FormNewComment = (form) => {
  var labelText = 'New Comment'
  form.className = 'newComment-form'
  form.innerHTML = ''
  form.method = 'POST'
  form.innerHTML = `${FormField({
    labelText: 'description',
    titleText: 'Write your comment here'
  })}`
  // ${FormField({
  //   labelText: 'Upload Images',
  //   type: 'file',
  //   required: false
  // })}
  //     `${FormField({
  //       labelText: 'Was it resolved?',
  //       type: 'checkbox',
  //       required: false
  //     })}
  //   ${FormField({
  //     labelText: 'Please write any related comment ID separated by commas',
  //     type: 'text',
  //     required: false
  //   })}
  //   <fieldset>
  //    <legend>Select a Category</legend>

  //   <div>
  //     <input type="radio" id="comment" name="typeComment" value="comment" />
  //     <label for="comment">Comment</label>
  //   </div>

  //   <div>
  //     <input type="radio" id="repair" name="typeComment" value="repair" />
  //     <label for="repair">repair</label>
  //   </div>

  //   <div>
  //     <input type="radio" id="Garden" name="typeComment" value="Garden" />
  //     <label for="Garden">Garden</label>
  //   </div>
  //   </fieldset>

  // <label for="story">Tell us your story:</label>

  // <textarea id="story" name="story" rows="5" cols="33">
  // It was a dark and stormy night...
  // </textarea>
  // <label for="selection">What category?</label>
  // <select id="simple" name="selection">
  // <option selected >Choose a category</option>
  //   <option value="🛠️">🛠️: Repair</option>
  //   <option value="🌳">🌳: Garden</option>
  //   <option value="🗣️">🗣️: Comment</option>
  // </select>

  // <input type='file' name='files[]' multiple>

  //   `
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
