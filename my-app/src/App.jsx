
import './styles/App.css';
import React from 'react';

import Footer from './components/Footer';
import ContentRowMovies from './components/ContentRowMovies';
import LastMovielnDb from './components/LastMovielnDb';
import GenreslnDb from './components/GenreslnDb';





function App() {
  return (
    <div className="App">
    <ContentRowMovies/>
    <LastMovielnDb/>
    <GenreslnDb/>
    <Footer/>
    </div>
  );
}

export default App;
