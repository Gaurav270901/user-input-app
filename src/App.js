


// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

import Navbar from './components/NavBar';
import UserForm from './components/UserForm';
import UserDataPage from './components/UserDataPage';
import './style.css'; 

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const App = () => {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (userData) => {
    setUserData(userData);
    
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        {/*<Route path="/" exact component={Home} />
        <Route path="/about" component={About} />*/
}
        <Route path = "/" element={<UserForm/>}/>
        <Route path = "/UserDataPage" element={<UserDataPage/>}/>
        {/*<Route path="/UserDataPage" exact render={() => <UserDataPage userData={userData} />} />*/}
      </Switch>
      
    </Router>
  );
};

export default App;

