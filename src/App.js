import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Search from './components/Search/Search';
import { Container} from './components/Styling/Styling';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalContext from './context/GlobalContext';

function App() {

  return (
    <GlobalContext>
      <Container className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
          </Switch>
        </Router>
      </Container>
    </GlobalContext>
    
  );
}

export default App;
