const MyForm = ({ name, setName }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered is ${name}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MyForm;