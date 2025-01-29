const CardSeries = ({ tv }) => {
    console.log(tv);

    if (!tv) {
        return <div>Caricamento...</div>; // Se `tv` è undefined, mostra un messaggio di caricamento
    }
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500/"; // URL per la dimensione dell'immagine
    const backdropUrl = tv.backdrop_path
        ? `${imageBaseUrl}${tv.backdrop_path}`
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
    const countryFlag = languageCountry[tv.original_language] || "us";
    const flagUrl = `https://flagcdn.com/w40/${countryFlag}.png`

    return (

        <div className="col-md-4 mb-4">

            <div className="card shadow-sm border-0">
                <img src={backdropUrl} className="card-img-top rounded" alt={tv.original_name} />
                <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{tv.original_name}</h5>
                    <p className="card-text">
                        Lingua Originale: <img src={flagUrl} alt={tv.original_language} />
                    </p>
                    <p className="card-text">
                        ⭐ Voto: <strong>{tv.vote_average.toFixed(1)}</strong> / 10
                    </p>
                    <p className="card-text">
                        {tv.overview ? tv.overview.slice(0, 50) + "..." : "Nessuna descrizione disponibile."}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default CardSeries