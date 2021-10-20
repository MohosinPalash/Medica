import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header'
import Home from './Pages/Home/Home/Home';
import Doctor from './Pages/Doctor/Doctor/Doctor';
import Blog from './Pages/Blog/Blog/Blog';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
function App() {
  useEffect(() => {
    document.title = "MEDICA";
  }, [])
  return (
    <div className="App">
      <AuthProvider>
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
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
