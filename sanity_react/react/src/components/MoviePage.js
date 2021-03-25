import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../styles/Styles";
import { getMovie } from "../utils/movieService";
import Title from "../components/Title";
import styled from "styled-components";

const MovieContainer = styled.article`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  padding: 2rem 3rem;
  text-align: center;
`;

const MovieSummary = styled.section`
  font-size: 1.7rem;
  font-weight: 400;
  color: #2bbc8a;
  max-width:500px;
  margin: 0 auto;
  text-align: left;
  padding-bottom: 3rem;
`;

const MovieHeading = styled.h2`
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 900;
  margin-bottom: 1.6rem;
  color: #2bbc8a;
`;

const MovieActor = styled(MovieHeading)`
  font-size: 1.7rem;
  font-weight: 400;
`;

const MoviePoster = styled.img`
    width: 500px;
    padding-bottom: 4rem;
`;

const StyledLink = styled.a`
  font-size: 2rem;
  color: #2bbc8a;
`;

// Litt rart navn på denne men ble noen changes litt sånn på tampen før påske, satser på at funksjonaliteten snakker for seg selv.
const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const data = await getMovie(slug);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, [slug]);

  if (!movie && error) return <div>Shits scuffed...</div>;
  if (!movie) return <div>Laster ....</div>;

  return (
    <Container>
      <MovieContainer>
        <MovieHeading># {movie.title} ({movie.release})</MovieHeading>
        <MovieActor>Featuring: {movie.actor}</MovieActor>
        <MoviePoster
          src={movie.image.asset.url}
          alt={movie.image.altText}
        />
        <MovieSummary>{movie.summary}</MovieSummary>
        <StyledLink href={`"${movie.imdb}"`}>Les mer på IMDB</StyledLink>
      </MovieContainer>
    </Container>
  );
};

export default MoviePage;

// Linken som blir laget i "StyledLink" generer riktig link i kildekoden, men når man trykker på den så blir man sendt til feil URL? Må se mer på dette. 
