import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Navbar from './components/Navbar';
import GlobalStyles from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
