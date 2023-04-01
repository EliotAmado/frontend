import React from 'react';
import './App.css';
import TopBanner from './Blah'; //importing Blah file so we can use its functions on this file
import MovieList from './Movies';
import PicturePage from './PicturePage';
import Podcasts from './Podcast';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/picture" element={<PicturePage />} />
            <Route path="/podcast" element={<Podcasts />} />
            <Route
              path="/"
              element={
                <>
                  <TopBanner />
                  <br></br>
                  <Link to="/picture">Home</Link>
                  <br></br>
                  <Link to="/podcast">Podcast</Link>
                  <br></br>
                  <MovieList />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
