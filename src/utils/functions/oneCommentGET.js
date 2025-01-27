import { API } from '../API/API'

export const oneCommentGET = async (id) => {
  console.log('Getting one comment')
  const token = JSON.parse(localStorage.getItem('token'))
  console.log('this is the token', token)
  try {
    const data = await API({
      endpoint: `comments/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    console.log(`this is the data of the ${id} id`, data)
    console.log(`this is the person ${data.person}`)
    return data
  } catch (error) {
    console.error('Error fetching comments:', error)
    return { error: error.message }
  }
}
