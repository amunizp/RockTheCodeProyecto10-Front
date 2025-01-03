// const url = 'http://localhost:3000/api/v1/'
const url = 'https://rock-the-code-proyecto10-back.vercel.app/api/v1/'
export const API = async ({
  endpoint,
  method = 'GET',
  body,
  isJSON = true,
  headers = {}
}) => {
  isJSON ? (headers['Content-Type'] = 'application/json') : null

  let res = await fetch(url + endpoint, {
    body: isJSON ? JSON.stringify(body) : body,
    method,
    headers
  })

  let response = await res.json()
  if (!res.ok) {
    throw new Error(response.message || 'Something went wrong')
    // return { error: response }
  }
  return response
}
