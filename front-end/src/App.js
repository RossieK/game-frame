import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GlobalStyles from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Search />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
