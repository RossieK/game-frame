//Styles
import GlobalStyles from './components/GlobalStyle';
//Routing
import { Route, Switch } from 'react-router-dom';
//Functionality
import { loadUser } from './actions/authAction';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//Pages
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Wishlist from './pages/Wishlist';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Login from './pages/Login';
import Error from './pages/Error';

function App() {
  //Fetch User
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path={["/game/:id", "/"]} exact>
          <Home />
        </Route>
        <Route path="/reviews" exact>
          <Reviews />
        </Route>
        <Route path="/wishlist" exact>
          <Wishlist />
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
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
