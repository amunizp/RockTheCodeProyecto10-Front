export const navigate = (e, route) => {
  if (e) {
    e.preventDefault()
  }
  window.history.pushState('', '', route.path)
  route.page()
}
