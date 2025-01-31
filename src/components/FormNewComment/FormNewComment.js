import { compressImage } from '../../utils/functions/compressImage'
import { newCommentPOST } from '../../utils/functions/newCommentPOST'
import { BasicButton } from '../Buttons/BasicButton'
import { FormField } from '../FormField/FormField'
import './FormNewComment.css'
export const FormNewComment = (form, relation) => {
  var labelText = 'New Comment'
  form.className = 'newComment-form'
  form.innerHTML = ''
  form.method = 'POST'
  form.enctype = 'multipart/form-data'
  form.innerHTML = `
   <label for="story" >Tell us your comment, this will be publicly shared, this field is required</label>

  <textarea id="description" name="description" rows="5" cols="33" title="This is a required field to find out what is needed." placeholder="Write your comment here" required ></textarea>
  
  ${FormField({
    labelText: 'relatedComments',
    titleText: 'Write related comments here separated by commas',
    required: false,
    textContent: relation ? relation : ''
  })}
  <label for="img">Upload Images, four maximum.</label>
  <input id="imageInput" type='file' name='img' multiple> 
  <fieldset>
  <label for="resolved">Tick if resolved.</label>
  <input type="checkbox" data-toggle="switch" name="resolved" id="resolved" value="true" />
  </fieldset>
    
     <label for="typeComment">What category?</label>
  <select id="typeComment" name="typeComment">
  
    <option value="🛠️">🛠️: Repair</option>
    <option value="🌳">🌳: Garden</option>
    <option selected value="💬">💬: Comment</option>
  </select>
  `

  imageInput.addEventListener('change', async (e) => {
    //source: https://stackoverflow.com/a/73744343/14037059
    console.log('File Selected: ', e.target.files)
    const compressedImages = []
    e.target.files
    for (const img of e.target.files) {
      //  let img = e.target.files[0]

      console.log('File Name: ', img.name)
      console.log('Original Size: ', img.size.toLocaleString())

      let imgCompressed = await compressImage(img, 75) // set to 75%
      let compSize = atob(imgCompressed.split(',')[1]).length
      console.log('Compressed Size: ', compSize.toLocaleString())
      console.log(imgCompressed)
      compressedImages.push(imgCompressed)
    }
    console.log('list of compressed images', compressedImages)
    console.log('list of files loaded', e.target.files)
  })
  form.append(
    BasicButton({
      text: 'Submit a New Comment',
      fnc: () => {
        console.log('Submitted New Comment')
      }
    })
  )
  form.addEventListener('submit', newCommentPOST)
}
