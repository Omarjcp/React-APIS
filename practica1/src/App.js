import { Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Ranks from './components/Ranks/Ranks'
import Maps from './components/Maps/Maps'
import Sprays from './components/Sprays/Sprays'


function App() {


  return (
    <>
    <Navbar />
    <Route exact path='/' render={() => <Home />}/>
    <Route path ='/Ranks' render={() => <Ranks />}/>
    <Route path ='/Maps' render={() => <Maps />}/>
    <Route path ='/Sprays' render={() => <Sprays />}/>
    </>
  );
}

export default App;
