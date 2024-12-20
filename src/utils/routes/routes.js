import { CreateComment } from '../../pages/CreateComment/CreateComment'
import { Home } from '../../pages/Home/Home'
import { Login } from '../../pages/Login/Login'

export const routes = [
  {
    path: '/login',
    text: 'Login',
    page: Login
  },

  {
    path: '/Home',
    text: 'Home',
    page: Home
  },
  {
    path: '/createComment',
    text: 'New Comment',
    page: CreateComment
  }
]
