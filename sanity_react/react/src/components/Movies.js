import { useEffect, useState } from 'react';
import { getMovies } from '../utils/movieService';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, []);

  if (!movies && error) return <div>Shits scuffed...</div>;
  if (!movies) return <div>Laster ....</div>;


  return(
    <p>
      {JSON.stringify(movies)}
    </p>
  )
  
};

export default Movies;
