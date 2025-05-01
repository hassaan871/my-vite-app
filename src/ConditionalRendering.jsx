const ConditionalRendering = (props) => {
    const { loggedIn } = props;
    return (
        <div>
            {loggedIn ? <h1>Welcome, User</h1> : <h1>Please LogIn first</h1>}
        </div>
    );
}

export default ConditionalRendering;