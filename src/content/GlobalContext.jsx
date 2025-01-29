import axios from 'axios';
import { use } from 'react';
import { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [query, setQuery] = useState(""); // Stato per l'input dell'utente
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    const queryTest = "The Office";
    const apiKey = "a433ce6c22ece22d747faebbc7095962";
    const urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    const urlSeries = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${queryTest}`;


    const fetchMovies = () => {
        axios.get(urlMovies)
            .then(res => {
                setMovies(res.data.results)
            });
    }
    const fetchSeries = () => {
        axios.get(urlSeries)
            .then(res => {
                console.log(res.data);  // Verifica tutta la risposta
                console.log(res.data.results);  // Verifica solo i risultati
                setSeries(res.data.results)
            });
    }



    return (
        <GlobalContext.Provider value={{ query, setQuery, movies, fetchMovies, setMovies, series, setSeries, fetchSeries }}>
            {children}
        </GlobalContext.Provider>
    )
}
const useGlobalContext = () => useContext(GlobalContext);
export { useGlobalContext, GlobalProvider }
