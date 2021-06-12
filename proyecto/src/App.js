  
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './componentes/Navbar/Navbar';
import Home from './componentes/Home/Home';
import Episodio from './componentes/Episodio/Episodio';

function App() {

  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    axios('https://breakingbadapi.com/api/episodes').then(({data}) => {
      setEpisodes(data)
    })
  }, [])


  const searchEpisode = (obj) => {
    const id = obj.match.params.id
    const episodio = episodes.find((ep) => ep.episode_id === Number(id))
    return episodio
  }

  return (
    <div > 
      <Navbar />
      <Route 
        exact path ='/'
        render={() => <Home episodes={episodes} />}
      />
      <Route
      path='/episodio/:id'
      render={(obj) => <Episodio episode={searchEpisode(obj)}/>}
      />
    </div>
  );
}

export default App;