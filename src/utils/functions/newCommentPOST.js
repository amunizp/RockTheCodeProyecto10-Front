import ErrorDiv from '../../components/errorDiv/errorDiv'
import { Loading } from '../../components/Loading/Loading'
import { CreateComment } from '../../pages/CreateComment/CreateComment'
import { API } from '../API/API'

// const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export const newCommentPOST = async (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  console.log('The form data in full', formData)
  console.log('The form data relatedComments', formData.get('relatedComments'))
  for (const value of formData.values()) {
    console.log('check if any is empty string', value)
    // if (value === '') {
    //   alert('Please fill in all fields')
    //   return false
    // }
  }
  const div = document.querySelector('.newComment-form')
  Loading(div)
  // await delay(5000)
  // console.log('Waited an additional 5s')
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
      if (data.error) {
        throw new Error(data.error)
      }
      if (data.description) {
        const personNameStorage = JSON.parse(
          localStorage.getItem('person')
        ).personName
        alert(`${personNameStorage}, I have created your Comment!`)
        // div.innerHTML += `${personNameStorage}, I have created your Comment!`
        // div.innerHTML += `${data}`
        CreateComment()
      } else {
        alert(data)
      }
    } else {
      alert('you need to be logged in first')
    }
  } catch (error) {
    console.log('Error submitting a new comment:', error)

    // div.innerHTML = ErrorDiv(error.message)
    div.prepend(ErrorDiv(error.message))

  } finally {
    if (document.getElementById('loader')) {
      document.getElementById('loader').remove()
    }
  }
}
