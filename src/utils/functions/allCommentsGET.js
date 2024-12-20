import { API } from '../API/API'

export const allCommentsGET = async () => {
  // e.preventDefault()
  console.log('Getting all comments')
  const token = localStorage.getItem('token')
  // const personID = JSON.parse(localStorage.getItem('person'))._id

  const data = await API({
    endpoint: 'comments',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
  console.log('this should have all the comments', data)
}
