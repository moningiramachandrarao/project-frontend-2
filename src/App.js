import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import CreateCar from './components/CreateCar';
import Modify from './components/Modify';
import List from "./components/List";
import Orders from "./components/Orders";
import SignIn from "./components/SignIn";
import Footer from './components/Footer';
import Home from "./components/Home";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="container-fluid">
      {isLoggedIn ? (
        <HashRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/orders" element={<Orders />} />
            <Route path="/create" element={<CreateCar />} />
            <Route path="/modify/:id" element={<Modify />} />
            <Route path="/list" element={<List />} />
          </Routes>
          <Footer/>
        </HashRouter>
      ) : (
        <SignIn onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
