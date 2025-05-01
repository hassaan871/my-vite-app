const ListRendering = () => {
    const names = ["Bruce", "Clark", "Diana"];
    return(
        <div>
            <ul>
                {names.map((name, index) => {
                    return <h1 key={index}>{name}</h1>
                })}
            </ul>
        </div>
    )
}

export default ListRendering;