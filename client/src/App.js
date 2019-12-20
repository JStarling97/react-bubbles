import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axiosWithAuth from "./axiosWithAuth";
import Login from "./components/Login";
import "./styles.scss";
import ProtectedRoute from "./ProtectedRoute";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/BubblesPage">Bubble Page</Link>
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <Route exact path="/BubblesPage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
