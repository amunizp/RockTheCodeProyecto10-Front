import { API } from '../API/API'

export const typeCommentsGET = async (type) => {
  // e.preventDefault()
  console.log('Getting comments')
  const token = JSON.parse(localStorage.getItem('token'))
  const id = JSON.parse(localStorage.getItem('person'))._id
  // console.log('this is the token', token)
  // console.log('this is the Id', id)
  try {
    const data = await API({
      endpoint: `comments/type/${type}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    console.log('Got the the data comments', type)
    return data
  } catch (error) {
    console.error('Error fetching comments:', error)
    return { error: error.message }
  }
}
