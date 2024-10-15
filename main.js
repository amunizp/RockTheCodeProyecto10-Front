// Importa el archivo de estilos CSS.
import './style.css'

// Importa comments
import Comments from './pages/Comments'

// Importa el módulo 'Login' desde el archivo "./pages/Login".
import Login from './pages/Login'

// Importa el módulo 'Register' desde el archivo "./pages/Register".
import Register from './pages/Register'

// Importa el módulo 'Favs' desde el archivo "./pages/Favs".
import Mine from './pages/Mine'

// Añade un controlador de eventos para el clic en el elemento con id "bookslink", que llama a la función Books().
document
  .querySelector('#commentslink')
  .addEventListener('click', () => Comments())

// Añade un controlador de eventos para el clic en el elemento con id "loginlink", que llama a la función Login().
document.querySelector('#loginlink').addEventListener('click', () => Login())

// Añade un controlador de eventos para el clic en el elemento con id "registerlink", que llama a la función Register().
document
  .querySelector('#registerlink')
  .addEventListener('click', () => Register())

// Añade un controlador de eventos para el clic en el elemento con id "favslink", que llama a la función Favs().
document.querySelector('#minelink').addEventListener('click', () => Mine())

// Añade un controlador de eventos para el clic en el elemento con id "logoutlink", que elimina el usuario del almacenamiento local,
// muestra un mensaje de despedida y llama a la función Login().
document.querySelector('#logoutlink').addEventListener('click', () => {
  localStorage.removeItem('person')
  alert('See you soon!')
  Login()
})

// Llama directamente a la función Login() para cargar el formulario.
Login()
