import React from 'react';
import { Link } from 'react-router-dom';
import SpencersBrother from './SpencersBrother.jpg';

function PicturePage() {
  return (
    <div className="PicturePage">
      <Link to="/">Movie List</Link>
      <br></br>
      <Link to="/podcast">Podcast</Link>
      <br></br>
      <img src={SpencersBrother} alt="Spencer's brother" />
      <p>
        This site is a simple site to display Spencer's brother, a movie
        collection, and a podcasts page using react
      </p>
    </div>
  );
}

export default PicturePage;
