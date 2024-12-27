import { CreateComment } from '../../pages/CreateComment/CreateComment'
import { API } from '../API/API'

export const newCommentPOST = async (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const images = formData.getAll('files[]').map((x) => x.name)

  const files = formData.getAll('files[]')
  console.log('cloudinary files:', files)

  try {
    if (localStorage.getItem('token') != 'undefined') {
      const token = JSON.parse(localStorage.getItem('token'))
      const body = {
        description: formData.get('description'),
        img: images,
        upload_preset: 'docs_upload_example_us_preset'
      }
      console.log('body ', body)
      console.log('formData ', formData)
      const data = await API({
        endpoint: 'comments',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body
      })
      if (data.description) {
        const personNameStorage = JSON.parse(
          localStorage.getItem('person')
        ).personName
        // return data
        alert(
          `${personNameStorage}, I have created your Comment! Here it is first few characters "${data.description.substring(
            0,
            20
          )} (...)" you can now add a new comment `
        )

        CreateComment()
      } else {
        alert(data)
      }
    } else {
      alert('you need to be logged in first')
    }
  } catch (error) {
    alert(`Error message `, error.message)
  }
}
