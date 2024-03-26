function profile (props) {
    const {name, major} = props;
    return (
        <div>
            <h2>my name is {name}</h2>
            <p>my major is {major}</p>
        </div>
    );
}

export default profile;