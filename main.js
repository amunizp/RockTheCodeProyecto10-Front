import './style.css'

import { Header } from './src/components/Header/header'
import { Main } from './src/components/Main/Main'
import { Login } from './src/pages/Login/Login'
import { Footer } from './src/components/Footer/footer'
import { Home } from './src/pages/Home/Home'
import { navigate } from './src/utils/functions/navigate'

Header()
Main()
// console.log()
if (localStorage.getItem('token')) {
  navigate(false, {
    path: '/Home',
    text: 'Home',
    page: Home
  })
} else {
  Login()
}
Footer()
