export const createPage = (id) => {
  const main = document.querySelector('main')
  const article = document.createElement('article')
  main.innerHTML = ''
  article.id = id
  main.append(article)
  return article
}
