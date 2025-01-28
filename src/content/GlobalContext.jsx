import axios from 'axios';
import { use } from 'react';
import { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a433ce6c22ece22d747faebbc7095962')
            .then(res => setMovies(res.data))
    }
    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <GlobalContext.Provider value={{ movies, setMovies }}>
            {children}
        </GlobalContext.Provider>
    )
}
export { GlobalContext }
export { GlobalProvider }