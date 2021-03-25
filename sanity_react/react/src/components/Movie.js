import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import urlFor from '../utils/imageUrl';

const MovieContainer = styled.article`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  padding: 2rem 3rem;
  height: 725px;
`;

const MovieHeading = styled.h2`
  font-size: 1.8rem;
  line-height: 1.2;
  font-weight: 900;
  margin-bottom: 1.6rem;
  color: #2bbc8a;
`;

const MovieActor = styled(MovieHeading)`
  font-size: 1.7rem;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  color: #2bbc8a;
  text-decoration: none;
`;

const Movie = ({ title, actor, release, image, slug }) => (
  <StyledLink to={`/movies/${slug}`}>
    <MovieContainer>
      <MovieHeading>
        # {title} ({release})
      </MovieHeading>
      <MovieActor>Featuring: {actor}</MovieActor>
      <img src={image.asset.url} width="400" alt={image.altText} />
    </MovieContainer>
  </StyledLink>
);

export default Movie;

// Ville bruke denne men hadde noen issues
// <img src={urlFor(image.asset).width(800).format('webp').url()} />
