import { Home } from '../../pages/Home/Home'
import { API } from '../API/API'

export const deleteCommentDEL = async (id) => {
  console.log('Deleteing comment', id)
  const token = JSON.parse(localStorage.getItem('token'))
  try {
    const data = await API({
      endpoint: `comments/${id}`,
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    console.log('The reply from deleted data', data)
    console.log('The data ID deleted is: ', data.commentDeleted._id)
    alert(`${data.message} the comment deleted was ${data.commentDeleted._id}`)
    Home()
    return data
  } catch (error) {
    console.error('Error deleting comment:', error)
    alert('Error Deleting Comment') //6777eb1e08dc5f2747c29bd5, 6777eccf08dc5f2747c29be4
    return { error: error.message }
  }
}
