import { useGlobalContext } from '../content/GlobalContext';
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const Header = () => {
    const { query, setQuery, fetchMovies, fetchTvShow } = useGlobalContext()

    const searchMovies = (event) => {
        console.log(event.key);
        if (event.key == 'Enter') {
            fetchMovies()
        }

    }
    const searchTvShow = (event) => {
        console.log(event.key);
        if (event.key == 'Enter') {
            fetchTvShow()
        }
    }

    useEffect(() => {
        fetchMovies()
        fetchTvShow()
    }, [])
    return (
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">BOOLFLIX</a>

                    <input className="form-control me-2" type="search" placeholder="Film/Serie" aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)} onKeyUp={searchMovies} />

                </div>
            </nav>
        </header>
    )
}


export default Header