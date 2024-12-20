const url = 'http://localhost:3000/api/v1/'
export const API = async ({
  endpoint,
  method = 'GET',
  body,
  isJSON = true,
  headers = {}
}) => {
  isJSON ? (headers['Content-Type'] = 'application/json') : null

  const res = await fetch(url + endpoint, {
    body: isJSON ? JSON.stringify(body) : body,
    method,
    headers
  })
  console.log('body stringified', JSON.stringify(body))
  console.log('the header', headers)
  console.log('el body', body)
  console.log('res antes de json', res)

  const response = await res.json()
  return response
}
