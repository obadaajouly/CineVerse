import {useEffect,useState} from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import searchIcon from './components/search.svg'

// http://www.omdbapi.com/?i=tt3896198&apikey=6c93b9ba
//http://www.omdbapi.com/?apikey=6c93b9ba
// 6c93b9ba

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6c93b9ba'

const movie1 = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
    }

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTitle , setSearchTitle] = useState([])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search);
        console.log(data)
    }
    useEffect(() => {
        searchMovies('hitman')
    },[])
  return (
    <div className = "app">
        <div className="search">
            <input
                placeholder='Search for movies'
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value) }
                onSubmit={(e) => setSearchTitle(searchTitle)}
            />
            <img
                src = {searchIcon}
                alt='search'
                onClick={() => searchMovies(searchTitle) }
            />
        </div>

        {
            movies?.length > 0 
            ? (
                <div className="container">
                    {
                        movies.map ((movie,index) =>(
                            <MovieCard movie={movie} key={index} />
                        ))
                    }
                </div>
            ):(
                <div className="empty">
                    <h2>No result found</h2>
                </div>
            )
        }
    </div>
  )
}

export default App
