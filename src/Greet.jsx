const Greet = (props) => {
    const { name } = props;

    return (
        <div style={{ display: "flex", justifyContent: "center", }}>
            <h1>
                Hello {name}
            </h1>
        </div>
    )
}

export default Greet;