import React from 'react';
import { Link } from 'react-router-dom';

function Podcasts() {
  return (
    <div className="Podcasts">
      <Link to="/">Movie List</Link>
      <br></br>
      <Link to="/picture">Home</Link>
      <br></br>
      <p>Here is a link to a page with the Baconscale site:</p>
      <div>
        <a href="https://baconsale.com"> Click Here!</a>
      </div>
    </div>
  );
}

export default Podcasts;
