import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';

const RaitingStars = ({ rating }) => {
    console.log(rating);

    const stars = Math.floor(rating / 2); //da 1 a 10 => 1 a 5
    let starsArray = [];

    for (let i = 0; i < 5; i++) {
        if (i < stars) {
            starsArray.push(faStar)
        } else {
            starsArray.push(faStarEmpty)
        }

    }
    return (
        <div>
            {starsArray.map((star, i) => (
                <FontAwesomeIcon key={i} icon={star} color="gold" />
            ))}
        </div>
    )
}


export default RaitingStars

