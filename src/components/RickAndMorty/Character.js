const Character = ({info}) => {
    return (
        <div>

            <h2>id: {info.id}</h2>
            <h2>name: {info.name}</h2>
            <div>Status: {info.status}</div>
            <div>Species: {info.status}</div>
            <div>Gender: {info.gender}</div>
            <img src={info.image} alt={info.name}/>
        </div>
    );
};

export default Character;