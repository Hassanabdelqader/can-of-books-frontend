import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile';
import About from './About';
import Welcome from './Components/Welcome';
import './app.css';

import { useAuth0 } from "@auth0/auth0-react";


import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
function App() {

  
  const {
    isAuthenticated
  } = useAuth0();
 

    return (
      <>
        <Router>
          <Header isAuth={isAuthenticated} />
          <Routes>
            <Route 
              exact path="/"
              element={(isAuthenticated) ?<BestBooks /> : <Welcome />}
            >
            </Route>
            {isAuthenticated &&
            <Route 
            
            exact path="/profile"
              element={<Profile />}
            >
            </Route>
            }
            <Route 
              exact path="/About"
              element={<About />}
            >
            </Route>
            {/* PLACEHOLDER: add a route with a path of '/about' that renders the `About` component */}
          </Routes>
      

          <Footer />
        </Router>
      </>
    )
  
}

export default App;
