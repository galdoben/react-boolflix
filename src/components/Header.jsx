
import React, { useState } from 'react';
import axios from 'axios';

const Header = () => {

    const [query, setQuery] = useState(""); // Stato per l'input dell'utente
    const [movies, setMovies] = useState([]); // Stato per i risultati della ricerca
}
const searchMovies = (event) => {
    e.preventDefault()

    const apiKey = "a433ce6c22ece22d747faebbc7095962";
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    axios.get(url)
        .then((response) => {
            setMovies(response.data.results); // Aggiorna lo stato con i risultati della ricerca
        })

    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">BOOLFLIX</a>
                <form className="d-flex" role="search" onSubmit={searchMovies}>
                    <input className="form-control me-2" type="search" placeholder="Film/Serie" aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Header