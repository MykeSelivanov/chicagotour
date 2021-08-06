import { useHistory } from 'react-router-dom';
import './RandomPlace.css';
import data from '../../data/places-data.json';

function RandomPlace() {
    const history = useHistory();
    return (
        <button className="RandomPlace" onClick={(e) => {
            const id = Math.floor(Math.random() * data.length)
            history.push(`/details/${id}`)
        }}>Show me a random place</button>
    )
}

export default RandomPlace;