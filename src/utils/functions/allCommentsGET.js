import { API } from '../API/API'

export const allCommentsGET = async () => {
  // e.preventDefault()
  console.log('Getting all comments')
  const token = JSON.parse(localStorage.getItem('token'))
  console.log('this is the token', token)
  try {
    const data = await API({
      endpoint: 'comments',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    return data
  } catch (error) {
    console.error('Error fetching comments:', error)
    return { error: error.message }
  }
}
