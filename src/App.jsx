import WithAuth from "./WithAuth";
import Dashboard from "./DashBoard";

const App = () => {
  const AuthenticatedDashboard = WithAuth(Dashboard);
  return(
    <div>
      <AuthenticatedDashboard isAuthenticated={true} user="Hassaan"/>
    </div>
  )
}

export default App;