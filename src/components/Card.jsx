

const Card = ({ movie }) => {
    const imageBaseUrl = "https://image.tmdb.org/t/p/https://image.tmdb.org/t/p/w500/"; // Dimensione dell'immagine
    const backdropUrl = movie.backdrop_path
        ? `${imageBaseUrl}${movie.backdrop_path}`
        : "https://placehold.co/500x281?text=No+Backdrop"; // Placeholder se l'immagine non è disponibile

    const languageCountry = {
        en: "gb",
        it: "it",
        fr: "fr",
        es: "es",
        de: "de",
        ja: "jp",
        ko: "kr",
        zh: "cn",
        ru: "ru",
        pt: "pt",
        hi: "in"
    }
    const countryFlag = languageCountry[movie.original_language] || "us";
    const flagUrl = `https://flagcdn.com/w40/${countryFlag}.png`
    return (
        <div className="col-md-4 mb-4">

            <div className="card movie-card">
                <img src={backdropUrl} className="card-img-top rounded" alt={movie.original_title} />
                <div className="card-overlay">
                    <h5 className="card-title fw-bold">{movie.original_title}</h5>
                    <p className="card-text">
                        Lingua Originale: <img src={flagUrl} alt={movie.original_language} />
                    </p>
                    <p className="card-text">
                        ⭐ Voto: <strong>{movie.vote_average.toFixed(1)}</strong> / 10
                    </p>
                    <p className="card-text">
                        {movie.overview ? movie.overview.slice(0, 50) + "..." : "Nessuna descrizione disponibile."}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card