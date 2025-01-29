import { useContext } from "react";
import { useGlobalContext } from "../content/GlobalContext";
import { useState } from "react";
import Card from "./Card";
import CardSeries from "./CardSeries";
const Main = () => {
    const [query, setQuery] = useState(""); // Stato per l'input dell'utente
    const { movies } = useGlobalContext()
    const { tvShow } = useGlobalContext()
    console.log(movies);
    console.log(tvShow);
    return (
        <body>
            <div className="container mt-4">
                {movies.length > 0 ? (
                    <div className="row">
                        <h2>ORIGINALI BOOLFLIX</h2>
                        {movies.map((movie) => (
                            <Card key={movie.id} movie={movie} />

                        ))}

                    </div>
                ) : (
                    <p className="text-center">
                        {query
                            ? "Nessun film trovato."
                            : "Inserisci una parola chiave per iniziare la ricerca."}
                    </p>
                )}
                {tvShow.length > 0 ? (
                    <div className="row">
                        <h2>ORIGINALI BOOLFLIX</h2>
                        {tvShow.map((tv) => (
                            <CardSeries key={tv.id} tv={tv} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center">
                        {query
                            ? "Nessun programma TV trovato."
                            : "Inserisci una parola chiave per iniziare la ricerca."}
                    </p>
                )}
            </div>
        </body>
    );
};


export default Main