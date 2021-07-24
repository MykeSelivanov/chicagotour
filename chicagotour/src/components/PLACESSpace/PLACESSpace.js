import './PLACESSpace.css';
import { Link } from 'react-router-dom';

export default function PLACESSpace(props) {
    const { name, image, address, hours, id } = props;
    return (
        <div className="PLACESSpace">
            <Link
                to={`/details/${id}`}>
                <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt="Hello" />
            </Link>

            <Link
                className="PLACESSpace-title"
                to={`/details/${id}`}>
                <h1>{name}</h1>
            </Link>

            <div className="PLACESSpace-info">
                <div>{address}</div> <br/> 
                <div className="hours">{hours}</div>
            </div>
        </div>
    )
}