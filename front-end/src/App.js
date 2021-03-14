import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import GlobalStyles from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
