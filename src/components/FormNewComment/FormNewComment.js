import { compressImage } from '../../utils/functions/compressImage'
import { newCommentPOST } from '../../utils/functions/newCommentPOST'
import { BasicButton } from '../Buttons/BasicButton'
import { FormField } from '../FormField/FormField'
import { Loading } from '../Loading/Loading'
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
  <label id="imgLabel" for="img">Upload Images, four maximum, jpg or Jpeg (normal camera photo)  combined size must be less than 4.5MB</label>
  <input id="imageInput" type='file' name='img' accept="image/jpeg, image/jpg" multiple> 
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

  const compressedImages = []
  // const imageInput = document.getElementById('imageInput')
  imageInput.addEventListener('click', async (e) => {
    console.log('I clicked to search for files!')
  })
  imageInput.addEventListener('change', async (e) => {
    const div = document.querySelector('.newComment-form')
    Loading(div)
    //source: https://stackoverflow.com/a/73744343/14037059
    console.log('File Selected: ', e.target.files)
    var originalSize = 0
    var newSize = 0
    for (const img of e.target.files) {
      //  let img = e.target.files[0]

      console.log('File Name: ', img.name)
      console.log('Original Size: ', img.size.toLocaleString())
      originalSize += Number(img.size)
      let imgCompressed = await compressImage(img, 75) // set to 75%
      console.log('img compressed', imgCompressed.size)
      // let compSize = atob(imgCompressed.size.split(',')[1]).length
      // console.log('Compressed Size: ', compSize.toLocaleString())
      newSize += Number(imgCompressed.size)
      compressedImages.push(imgCompressed)
    }
    console.log(
      `The original size was ${originalSize.toLocaleString()}, the new size is ${newSize.toLocaleString()}`
    )
    // const imgLabel = document.getElementById('imgLabel')
    imgLabel.innerHTML = `Upload Images, four maximum, jpg or Jpeg (normal camera photo) combined size must be less than 4.5MB, you gave me ${(
      originalSize / 1000000
    ).toFixed(1)} MB which I compressed to ${(newSize / 1000000).toFixed(1)}MB`

    // console.log('list of compressed images', compressedImages)
    // console.log('list of files loaded', e.target.files)
    // e.target.files = compressedImages
    if (document.getElementById('loader')) {
      document.getElementById('loader').remove()
    }
  })
  form.append(
    BasicButton({
      text: 'Submit a New Comment',
      fnc: () => {
        console.log('Submitted New Comment')
      }
    })
  )

  form.addEventListener('submit', async (e) =>
    newCommentPOST(e, compressedImages)
  )
}
