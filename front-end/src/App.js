//Styles
import GlobalStyles from './components/GlobalStyle';
//Routing
import { Route, Switch } from 'react-router-dom';
//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//Pages
import Home from './pages/Home';
import MyProfile from './pages/MyProfile';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path={["/game/:id", "/"]} exact>
          <Home />
        </Route>
        <Route path="/myprofile" exact>
          <MyProfile />
        </Route>
        <Route path="/logout" exact>
          <Logout />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
