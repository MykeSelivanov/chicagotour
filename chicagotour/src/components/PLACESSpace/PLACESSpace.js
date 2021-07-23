import './PLACESSpace.css';
import { Link } from 'react-router-dom';

export default function PLACESSpace(props) {
    const { name, image, address, hours, id } = props;
    return (
        <div className="PLACESSpace">
            <Link to={`/details/${id}`}>
                <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt="Hello" />
            </Link>
            <h1>
                <Link to={`/details/${id}`}>
                    {name}
                </Link>
            </h1>
            <div>{address}</div>
            <div className="hours">{hours}</div>
        </div>
    )
}