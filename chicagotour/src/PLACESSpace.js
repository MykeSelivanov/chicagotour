import './PLACESSpace.css';

function PLACESSpace(props) {
    const { name, image, address } = props;
    return (
        <div className="PLACESSpace">
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt="Hello" />
            <h1>{name}</h1>
            <div>{address}</div>
        </div>
    )
}

export default PLACESSpace;