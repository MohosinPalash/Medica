import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header'
import Home from './Pages/Home/Home/Home';
function App() {
  useEffect(() => {
    document.title = "MEDICA";
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
