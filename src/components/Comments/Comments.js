// Define una arrow function llamada `template` que devuelve un template string.

export const commentsArticle = (arrayOfComments) => {
  const section = document.createElement('section')
  if (Array.isArray(arrayOfComments) || !arrayOfComments.length) {
    for (const comment of arrayOfComments) {
      section.innerHTML += `
    <article>
        <figure> <img src="${comment.img}"/></figure>
    <p>${comment.description}</p>
  </article>
  `
    }
  } else {
    section.innerHTML = `<article><p>No comments here</p></article>`
  }
  return section
}
