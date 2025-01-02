import { CreateComment } from '../../pages/CreateComment/CreateComment'
import { API } from '../API/API'

export const newCommentPOST = async (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  console.log('The form data in full', formData)
  try {
    if (localStorage.getItem('token') != 'undefined') {
      const token = JSON.parse(localStorage.getItem('token'))
      const data = await API({
        endpoint: 'comments',
        method: 'POST',
        isJSON: false,
        headers: {
          Authorization: `Bearer ${token}`
        },

        body: formData // Send the formData directly
      })
      if (data.description) {
        const personNameStorage = JSON.parse(
          localStorage.getItem('person')
        ).personName
        alert(`${personNameStorage}, I have created your Comment!`)
        CreateComment()
      } else {
        alert(data)
      }
    } else {
      alert('you need to be logged in first')
    }
  } catch (error) {
    console.error('Error:', error)
    alert(`Error message `, error.message)
  }
}
