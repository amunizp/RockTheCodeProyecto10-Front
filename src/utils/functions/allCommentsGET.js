import { API } from '../API/API'

export const allCommentsGET = async () => {
  // e.preventDefault()
  console.log('Getting all comments')
  const token = JSON.parse(localStorage.getItem('token'))
  console.log('this is the token', token)
  // const personID = JSON.parse(localStorage.getItem('person'))._id
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjUzOTI0NDk2YWRmYWI5ZjU4MTNiNiIsImlhdCI6MTczNDY5ODIxMiwiZXhwIjoxNzY2MjU1ODEyfQ.reOuHzrdw-WB9HD0HXR2lmhiIQrIiLOsKmwm6Rd-OhY"

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
