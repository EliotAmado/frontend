import { useState } from 'react';
import { Movies } from './Types/Movies';
function MovieList() {
  const [MovieData, setMovieData] = useState<Movies[]>([]);

  const fetchMovies = async () => {
    const rsp = await fetch('https://localhost:4000/Movie');
    const temp = await rsp.json();
    setMovieData(temp);
  };

  fetchMovies();

  // Filter and sort the movies array
  const editedMovies = MovieData.filter((movie) => movie.edited !== null);
  editedMovies.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <div className="row">
        <h4>Movie List</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {MovieData.map((f) => (
            <tr key={f.movieId}>
              <td>{f.category}</td>
              <td>{f.title}</td>
              <td>{f.year}</td>
              <td>{f.director}</td>
              <td>{f.rating}</td>
              <td>{f.edited}</td>
              <td>{f.lentTo}</td>
              <td>{f.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
