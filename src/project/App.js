import React from 'react'
import NavbarMenu from './Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';

function App() {
 
  return (
      <div>
        <NavbarMenu />
        <Routes>
          <Route exact path='/' Component={Home} key={window.location.pathname}></Route>
          <Route path='/Cart' Component={Cart} key={window.location.pathname}>Cart</Route>
        </Routes>
       
      </div>
  );
}

export default App;
