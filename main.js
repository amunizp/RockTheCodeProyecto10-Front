import './style.css'

import { Header } from './src/components/Header/header'
import { Main } from './src/components/Main/Main'
import { Login } from './src/pages/Login/Login'
import { Footer } from './src/components/Footer/header'

// console.log('hola escribe algo!')
// // Añade un controlador de eventos para el clic en el elemento para llamar a Comments
// console.log(document.getElementById('commentslink'))
// console.log(document.getElementById('loginlink'))
// console.log(document.getElementById('app'))
// document
//   .querySelector('#commentslink')
//   .addEventListener('click', () => Comments())

// // .querySelector('#commentslink')
// // .addEventListener('click', () => Comments())
// console.log('Event Listener done.')
// // Añade un controlador de eventos para el clic en el elemento con id "loginlink", que llama a la función Login().
// document.querySelector('#loginlink').addEventListener('click', () => Login())

// // Añade un controlador de eventos para el clic en el elemento con id "registerlink", que llama a la función Register().
// document
//   .querySelector('#registerlink')
//   .addEventListener('click', () => Register())

// // Añade un controlador de eventos para el clic en el elemento con id "favslink", que llama a la función Favs().
// document.querySelector('#minelink').addEventListener('click', () => Mine())

// // Añade un controlador de eventos para el clic en el elemento con id "logoutlink", que elimina el usuario del almacenamiento local,
// // muestra un mensaje de despedida y llama a la función Login().
// document.querySelector('#logoutlink').addEventListener('click', () => {
//   localStorage.removeItem('person')
//   console.log('logging out')
//   alert('See you soon!')
//   Login()
// })
// console.log('called login from Main')

Header()
Main()
Login() // Llama directamente a la función Login() para cargar el formulario.
// Login()
Footer()
