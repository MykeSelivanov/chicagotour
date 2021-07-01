import logo from './logo.svg';

function PLACESSpace(props) {
    const { name, image, address } = props;
    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="400" height="400" alt="Hello" />
            <h1>{name}</h1>
            <div>{address}</div>
        </div>
    )
}

export default PLACESSpace;