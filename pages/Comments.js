// Define una arrow function llamada `template` que devuelve un template string.
const template = () => `
  <section id="comments">
    ${
      localStorage.getItem('user')
        ? `
        <h3>Welcome User</h3>`
        : `<h3>Please, log in</h3>`
    }
    <ul id="commentscontainer">
    </ul>
  </section>
`

const Comments = () => {
  console.log('Got comments')
}

export default Comments
