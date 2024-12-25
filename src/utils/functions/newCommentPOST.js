import { CreateComment } from '../../pages/CreateComment/CreateComment'
import { API } from '../API/API'

export const newCommentPOST = async (e) => {
  e.preventDefault()
  console.log('Logging in', e)

  const [description] = e.target
  console.log('the e.target is ', e.target)
  const formData = new FormData()
  formData.append('description', description.value)

  const token = JSON.parse(localStorage.getItem('token'))

  const body = {
    description: formData.description
  }
  console.log(body)

  const data = await API({
    endpoint: 'comments',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body //: formData
  })

  const personNameStorage = JSON.parse(
    localStorage.getItem('person')
  ).personName
  // return data
  alert(
    `I would like to show you the data ${personNameStorage}, I have created your Comment! here it is ${data} I will let you add some more. Or maybe you just want to go home`
  )

  CreateComment()
}
