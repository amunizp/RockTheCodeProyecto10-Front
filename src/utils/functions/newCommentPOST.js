import { CreateComment } from '../../pages/CreateComment/CreateComment'
import { API } from '../API/API'

export const newCommentPOST = async (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const token = JSON.parse(localStorage.getItem('token'))

  const body = {
    description: formData.get('description')
  }

  const data = await API({
    endpoint: 'comments',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body
  })

  const personNameStorage = JSON.parse(
    localStorage.getItem('person')
  ).personName
  // return data
  alert(
    `I would like to show you the data ${personNameStorage}, I have created your Comment! I will let you add some more. Or maybe you just want to go home`
  )

  CreateComment()
}
