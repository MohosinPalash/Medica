import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header'
import Home from './Pages/Home/Home/Home';
import Doctor from './Pages/Doctor/Doctor/Doctor';
import Blog from './Pages/Blog/Blog/Blog';
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
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/doctor">
            <Doctor></Doctor>
          </Route>
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
