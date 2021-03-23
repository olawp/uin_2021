import { useEffect, useState } from 'react';
import { Container } from '../styles/Styles';
import { getMovies } from '../utils/movieService';
import Grid from './Grid';
import Movie from './Movie';
import Title from './Title';

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
    <Container>
      <Title title="Movies" />
      <Grid marginTop="2rem">
      {movies?.length > 0 ? movies.map((movie, i)=> <Movie key={i} {...movie} />): null}
      </Grid>
    </Container>
  )
  
};

export default Movies;