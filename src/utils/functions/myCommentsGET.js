import { API } from '../API/API'

export const myCommentsGET = async () => {
  // e.preventDefault()
  console.log('Getting my comments')
  const token = JSON.parse(localStorage.getItem('token'))
  const id = JSON.parse(localStorage.getItem('person'))._id
  console.log('this is the token', token)
  console.log('this is the Id', id)
  try {
    const data = await API({
      endpoint: `comments/person/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    // console.log('The data of my comments', data)
    return data
  } catch (error) {
    console.error('Error fetching comments:', error)
    return { error: error.message }
  }
}
