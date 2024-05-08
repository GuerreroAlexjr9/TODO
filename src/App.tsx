

import './App.css'

function App() {


  return (
    <>
      <form action='#' method='post'>
        <h2>Bienvenido Html Indra</h2>
        <label htmlFor="">Usuario: </label>
        <input type="text" id='usuario' required />
        <br />
        <label htmlFor="">Contraseña: </label>
        <input type="password" id='contraseña' required />
        <br />
        <button type='submit'>Iniciar Sesión</button>
      </form>
    </>
  )
}

export default App
