const WithAuth = (WrappedComponent) => {
    return (props) =>{
        const isAuthenticated = props.isAuthenticated;
        if(!isAuthenticated) return <h2>Please Login first to gain the access</h2>
        return <WrappedComponent {...props}/>
    }
}

export default WithAuth;