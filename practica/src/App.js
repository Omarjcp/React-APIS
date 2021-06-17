import Nav from './components/Navbar'
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home';
import ComponenteClass from './components/ComponenteClass'
import ComponenteFuncional from './components/ComponenteFuncional';


function App() {
  return (
    <>
    <div>
      <Route path='/'>
        <Nav />
      </Route>
    </div>
      
      <Route exact path='/'>
        <Home />
      </Route>


      <Route exact path='/componenteclase'>
        <ComponenteClass />
      </Route>

      <Route exact path='/componentefuncional'>
      <ComponenteFuncional />
      </Route>
    </>


  );
}

export default App;
