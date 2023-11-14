import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Sup from "./Sup"
import Login from "./Login"



function App() {
  return (
    <Router>
    <div>
      <Route path="/signup" component={Sup} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
    
  );
}

export default App;
