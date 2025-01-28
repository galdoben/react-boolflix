import { useContext } from "react";
import { GlobalContext } from "../content/GlobalContext";
import { useState } from "react";

const Main = () => {
    const [query, setQuery] = useState(""); // Stato per l'input dell'utente
    const { movies } = useContext(GlobalContext);
    return (
        <div>
            <div className="container mt-4">
                {movies.length > 0 ? (
                    <div className="row">
                        {movies.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-muted">
                        {query
                            ? "Nessun film trovato."
                            : "Inserisci una parola chiave per iniziare la ricerca."}
                    </p>
                )}
            </div>
        </div>
    )
}


export default Main