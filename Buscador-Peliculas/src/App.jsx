import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useState } from 'react'
import { useEffect } from 'react'


function App() {
  const { movies} = useMovies()
  const [ query, setQuery ] = useState('')
  const [error, setError] = useState(null)
  
  const handlesubmit = (event) => {
    event.preventDefault()
    console.log({query})
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    setQuery(event.target.value)

    if (newQuery === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }
    if (newQuery.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }
    if(newQuery.length < 2)
      setError('Se debe tener almenos 2 caracteres')
      return
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handlesubmit}>
          <input onChange={handleChange} value={query} name='query' placeholder='Rocky , chake chan' />
          <button type='submit'>Buscar</button>
          </form>
          {error && <p style={{color: 'red'}} >{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
