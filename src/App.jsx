import WithAuth from "./WithAuth";
import Dashboard from "./DashBoard";
import MouseTracker from "./MouseTracker";

const App = () => {
  // const AuthenticatedDashboard = WithAuth(Dashboard);
  return(
    <div>
      {/* <AuthenticatedDashboard isAuthenticated={true} user="Hassaan"/> */}
      <h1>Welcome to the mouse tracker app</h1>
      <MouseTracker />
    </div>
  )
}

export default App;