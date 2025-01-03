import { Loading } from '../../components/Loading/Loading'
import { CreateComment } from '../../pages/CreateComment/CreateComment'
import { API } from '../API/API'

// const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export const newCommentPOST = async (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)
  console.log('The form data in full', formData)
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
    div.innerHTML += `<h3>Error submitting a new comment</h3><p>${error}</p>`
  } finally {
    if (document.getElementById('loader')) {
      document.getElementById('loader').remove()
    }
  }
}
